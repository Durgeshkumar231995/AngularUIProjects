import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  private userBaseUrl = 'http://localhost:8081/api/ups';
  private username: string = '';

  constructor(private httpClient: HttpClient,private router: Router) {}
 
  login(username: string, password: string): Observable<any> {
    return this.httpClient.post("http://localhost:8082/api/auth/login", {"username":username,"password":password }
   );
}
  saveUser(user: any): Observable<any> {
    return this.httpClient.post(this.userBaseUrl+"/register", user);
  }

  getToken() {
    return sessionStorage.getItem("token");
  }


  fetchAllAIJOBData(): Observable<any>{
    return this.httpClient.get<any>("http://localhost:9090/v1/AIJob/getAllRoles");
  }


getUsername(): string {
  return this.username = sessionStorage.getItem('username') || '';
}
  bookmarkItem(username: String, body: any): Observable<any> {
    return this.httpClient.post(`http://localhost:9090/v1/AIJob/saveBookmark/${username}`, body);
  }


  logout() {
    
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
   // localStorage.removeItem('token');
    this.router.navigate(['/login']);
   
}

isAuthenticated() {
  return !!sessionStorage.getItem('token');
}




}
