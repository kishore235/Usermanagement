import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url ='http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param data 
   * @returns 
   */
  postUser(data:any){
    return this.http.post(this.url,data)
  }
  
  /**
   * 
   * @returns 
   */
  getUser(){
    return this.http.get(this.url)
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  userDelete (id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  getUserToUpdate(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  /**
   * 
   * @param id 
   * @param data 
   * @returns 
   */
  updateData(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
