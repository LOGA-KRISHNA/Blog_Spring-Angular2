import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

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
    return this.http.post(`${environment.apiUrl}/comment/create`, { content }, { params });
  }

  getAllPostById(post_id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/comment/${post_id}`);
  }
}
