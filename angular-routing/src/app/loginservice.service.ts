import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  isloggedIn:boolean=false;

  constructor() { }

  LoginStatus(){
    this.isloggedIn=true;
  }
}
