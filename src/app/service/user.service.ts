import { Injectable } from '@angular/core';
import { USER } from './user-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { friendList } from './user-list';
import { friends } from './user-list-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 // getUserDetails(): User[] {
  //  throw new Error('Method not implemented.');
 // }

  //private baseURL = "/api/v1/users"
  //constructor(private httpcient: HttpClient) { }

 // getUserDetails():Observable<User[]>{
   // return this.httpcient.get<User[]>(`${this.baseURL}`);
  //} 

  getUserDetails():User[]{
    return USER;
  }

  getFriendList():friendList[]{
    return friends;
  }
  
}
