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

  public createCategory(pram) {
    return this.http.post(`${Api_Url}/Category`, pram, { headers: this.getHeaders() });
  }

  public editCategory(pram) {
    return this.http.put(`${Api_Url}/Category`, pram, { headers: this.getHeaders() });
  }

  public deleteCategory(pram) {
    return this.http.delete(`${Api_Url}/Category?CategoryId=${pram}`, { headers: this.getHeaders() });
  }

  public getThreads(pram) {
    return this.http.get(`${Api_Url}/Thread?CategoryId=${pram}`, { headers: this.getHeaders() });
  }

  public createThread(pram) {
    return this.http.post(`${Api_Url}/Post`, pram, { headers: this.getHeaders() });
  }

  public editThread(pram) {
    return this.http.put(`${Api_Url}/Post`, pram, { headers: this.getHeaders() });
  }

  public deleteThread(pram) {
    return this.http.delete(`${Api_Url}/Thread?ThreadId=${pram}`, { headers: this.getHeaders() });
  }

  public getPosts(pram) {
    return this.http.get(`${Api_Url}/Post?ThreadId=${pram}`, { headers: this.getHeaders() });
  }

  public createPost(pram) {
    return this.http.post(`${Api_Url}/Post`, pram, { headers: this.getHeaders() });
  }

  public editPost(pram) {
    return this.http.put(`${Api_Url}/Post`, pram, { headers: this.getHeaders() });
  }

  public deletePost(pram) {
    return this.http.delete(`${Api_Url}/Post?PostId=${pram}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
