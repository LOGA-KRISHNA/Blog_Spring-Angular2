import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
const API_URL = 'https://blog-springbootbackend-50026124227.development.catalystappsail.in'; // Replace with your actual API URL
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) { }

  createComment(post_id: number, postedBy: string, content: string): Observable<any> {
    const params = {
      postId: post_id.toString(),
      postedBy: postedBy
    };
    return this.http.post(`${API_URL}/comment/create`, { content }, { params });
  }

  getAllPostById(post_id: number): Observable<any> {
    return this.http.get(`${API_URL}/comment/${post_id}`);
  }
}
