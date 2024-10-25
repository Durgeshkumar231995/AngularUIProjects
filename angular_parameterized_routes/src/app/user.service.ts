import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // inject HttpClient to make http requests
  constructor(private httpClient:HttpClient) {}

  //  apiUrl http://localhost:3000/users/<id>
  //return details of user based on id
  getUserById(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users/'+id);
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users');
  }
}
