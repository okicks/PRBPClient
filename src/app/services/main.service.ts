import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'https://localhost:44327/api';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get(`${Api_Url}/Category`, { headers: this.getHeaders() });
  }

  public getThreads(pram) {
    return this.http.get(`${Api_Url}/Thread?CategoryId=${pram}`, { headers: this.getHeaders() });
  }

  public getPosts(pram) {
    return this.http.get(`${Api_Url}/Post?ThreadId=${pram}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
