import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }


  fetchDataPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + 'posts');
  }

  fetchDataPhoto(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl + 'photos?albumId=1');
  }

  fetchDataFilterPost(search: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + 'posts/userId/' + search);
  }

  fetchDataFilterPhoto(search: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl + 'photos?albumId=' + search);
  }
}
