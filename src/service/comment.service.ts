import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
const API_URL = 'https://blogspring-angular-production.up.railway.app/api'; // Replace with your actual API URL
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) { }

  createComment(post_id: number, postedBy: string, content: string): Observable<any> {
    // const params = {
    //   postId: post_id,
    //   postedBy: postedBy,
    //   content: content
    // };
    // console.log(params);
    
    // return this.http.post(`${API_URL}/comment/create`, {params} );
    const params = new HttpParams()
    .set('post_id', post_id.toString())
    .set('postedBy', postedBy)
    .set('content', content);

  return this.http.post(`${API_URL}/comment/create`, null, { params });
  }

  getAllPostById(post_id: number): Observable<any> {
    return this.http.get(`${API_URL}/comment/${post_id}`);
  }
}
