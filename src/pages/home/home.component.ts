import { Component, Pipe } from '@angular/core';
import { PostServiceService } from '../../service/post-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule,MatCardModule, MatButtonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private postService: PostServiceService,private snackbar:MatSnackBar) {
    this.getAllPosts();
  } 
  posts: any[] = []; 

  getAllPosts() {
    this.postService.getAllPosts().subscribe(res=>{
      console.log(res);
      this.posts=res;
      
    },err=>{
      this.snackbar.open("Error while fetching posts","ok")
    })
  }

  truncateContent(content: string, limit: number): string {
    return content.length > limit ? content.substring(0, limit) + '...' : content;
  }
}
