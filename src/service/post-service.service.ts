import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "https://blog-springbootbackend-50026124227.development.catalystappsail.in";
//https://blog-springbootbackend-50026124227.development.catalystappsail.in
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient) { }

  createPost(data: any): Observable<any> {
    return this.http.post(`/api/posts`, data);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`/api/posts`);
  }
  getPostByID(id:number): Observable<any> {
    return this.http.get(`/api/posts/${id}`);
  }

  likePost(id:number): Observable<any> {
    return this.http.put(`/api/posts/${id}/like`,{});
  }

}
