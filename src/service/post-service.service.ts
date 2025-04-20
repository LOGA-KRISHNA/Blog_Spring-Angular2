import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient) { }

  createPost(data: any): Observable<any> {
    return this.http.post(`${url}/api/posts`, data);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${url}/api/posts`);
  }
  getPostByID(id:number): Observable<any> {
    return this.http.get(`${url}/api/posts/${id}`);
  }

  likePost(id:number): Observable<any> {
    return this.http.put(`${url}/api/posts/${id}/like`,{});
  }

}
