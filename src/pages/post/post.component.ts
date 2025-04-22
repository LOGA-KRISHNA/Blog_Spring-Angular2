import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../service/post-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../service/comment.service';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-post',
  imports: [CommonModule, MatChipsModule, MatCardModule, MatButtonModule, MatIconModule,MatFormFieldModule,ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  postId: number;
  postData: any;
  commentForm!:FormGroup;
  comments: any[] = []; // To store comments

  constructor(
    private postservice: PostServiceService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
    private fb: FormBuilder,
    private commentService: CommentService
  ) {
    this.postId = this.activatedRoute.snapshot.params['id'];
  }
  
  ngOnInit() {
    this.getPostByID();
    this.commentForm = this.fb.group({
      postedBy: ['', Validators.required],
      content: ['', Validators.required]
    });
    this.getComments();
  }

  getPostByID() {
    this.postservice.getPostByID(this.postId).subscribe(res => {
      this.postData = res;
      if (!this.postData.comments) {
        this.postData.comments = []; // Initialize comments as an empty array if undefined
      }
    }, error => {
      this.snackbar.open("Error while fetching post", "ok");
    });
  }

  likePost() {
    this.postservice.likePost(this.postId).subscribe(
      res => {
        this.snackbar.open("Post liked successfully", "ok");
      },
      error => {
        this.snackbar.open("Error while liking post", "ok");
      }
    );
  }  

  publishComment() {
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;
    this.commentService.createComment(this.postId, postedBy, content).subscribe(
      (res) => {
        this.snackbar.open('Comment published successfully', 'ok');
        this.commentForm.reset();
        this.getComments(); // Refresh comments after publishing
      },
      (err) => {
        this.snackbar.open('Error while publishing comment', 'ok');
      }
    );
  }

  getComments() {
    this.commentService.getAllPostById(this.postId).subscribe(
      (res) => {
        this.comments = res;
        console.log(this.comments);
      },
      (error) => {
        this.snackbar.open('Error while fetching comments', 'ok');
      }
    );
  }
  
}


