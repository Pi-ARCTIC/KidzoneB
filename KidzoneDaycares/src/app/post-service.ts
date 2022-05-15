import { Injectable } from '@angular/core';
import { Post } from './post';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostService {
    readonly API_URL = 'http://localhost:8083'

    constructor(private http: HttpClient) { }
  
    getAllPosts(): Observable<any>{
      return this.http.get(`${this.API_URL}/retrieve-all-Posts`);
    }
}
