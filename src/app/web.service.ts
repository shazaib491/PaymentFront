import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
readonly ROOT_URL;
  constructor(private http:HttpClient) {
    this.ROOT_URL='http://localhost:3000/api/payment'
   }

  post(uri:string,payload){
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload)
  }
  get(uri:string){
    return this.http.get(`${this.ROOT_URL}/uri`)
  }
}
