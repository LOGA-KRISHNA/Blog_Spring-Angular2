import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../service/post-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule, MatChipsModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  postId: number;
  postData: any;

  constructor(
    private postservice: PostServiceService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
    this.postId = this.activatedRoute.snapshot.params['id'];
    console.log(this.postId);
    this.getPostByID();
  }
  
  ngOnChanges() {
    // No longer calling likePost() here
  }

  getPostByID() {
    this.postservice.getPostByID(this.postId).subscribe(res => {
      this.postData = res;
      console.log(this.postData);
    }, error => {
      this.snackbar.open("Error while fetching post", "ok")
    })
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
  
}


