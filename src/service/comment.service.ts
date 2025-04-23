import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url="https://blog-springbootbackend-50026124227.development.catalystappsail.in";
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  createComment(post_id:number,postedBy:string,content:string):Observable<any>{
    const params={
      post_id:post_id,
      postedBy:postedBy
    }
    return this.http.post(`/api/comment/create`,content,{params});
  }

  getAllPostById(post_id:number):Observable<any>{
    return this.http.get(`/api/comment/${post_id}`);
  }
}
