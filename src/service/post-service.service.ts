import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const API_URL = 'https://blogspring-angular-production.up.railway.app/api';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient) { }

  createPost(data: any): Observable<any> {
    return this.http.post(`${API_URL}/posts`, data);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${API_URL}/posts`);
  }

  getPostByID(id: number): Observable<any> {
    return this.http.get(`${API_URL}/posts/${id}`);
  }

  likePost(id: number): Observable<any> {
    return this.http.put(`${API_URL}/posts/${id}/like`, {});
  }
  //Hello
}
