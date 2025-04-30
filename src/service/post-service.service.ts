import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient) { }

  createPost(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/posts`, data);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts`);
  }

  getPostByID(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts/${id}`);
  }

  likePost(id: number): Observable<any> {
    return this.http.put(`${environment.apiUrl}/posts/${id}/like`, {});
  }
  //Hello
}
