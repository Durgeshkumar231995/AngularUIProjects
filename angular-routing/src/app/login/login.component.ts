import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  pwd1: string = '';
  constructor(private route: Router, private log: LoginserviceService) { }
  Home() {
    this.route.navigate(['home']);
  } onSubmit() {
    this.log.LoginStatus();
  }

  canExit():boolean {
    if (this.username == '' || this.pwd1 == '') {
      return confirm('Do you want to leave this page?');
      
    }
    else {
      return true;
    }
  }

}
