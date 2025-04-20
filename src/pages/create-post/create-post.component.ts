import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { PostServiceService } from '../../service/post-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatChipsModule, MatIconModule]
})
export class CreatePostComponent {
  createPostForm: FormGroup;
  snakBar:MatSnackBar | undefined;
  tags: string[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  
  constructor(private fb: FormBuilder, private postservice: PostServiceService, private router: Router) {
    this.createPostForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      content: ['', Validators.required],
      postedBy: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.createPostForm.valid) {
      const postData = {
        ...this.createPostForm.value,
        tags: this.tags
      };
      
      this.postservice.createPost(postData).subscribe(
        (response) => {
          this.snakBar?.open('Post created successfully', "ok");
          this.router.navigateByUrl('/');
        },
        (error) => {
          console.error('Error creating post', error);
        }
      );
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}