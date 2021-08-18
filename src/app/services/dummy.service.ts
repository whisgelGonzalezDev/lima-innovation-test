import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DummyService {
 BASE_URL: string = 'https://dummyapi.io/data/v1/';
  token: string = '611d01c3acc1e665eb68e57c'
  

  constructor(private http: HttpClient) { }

  getUser(id: string){
    return this.http.get(`${this.BASE_URL}user/${id}`, { headers: { 'app-id': this.token } })
  }

  getAllPost(){

    return this.http.get(`${this.BASE_URL}post`, { headers: { 'app-id': this.token } })
  }

  getAllTag(tagTitle:string){

    return this.http.get(`${this.BASE_URL}tag/${tagTitle}/post`, { headers: { 'app-id': this.token } })
  }

  getComments(postId: string) {
    return this.http.get(`${this.BASE_URL}post/${postId}/comment`, { headers: { 'app-id': this.token }})
  }

}
