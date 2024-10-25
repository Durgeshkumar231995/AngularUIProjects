import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  message:boolean=false;

  constructor( private router: Router,private authService: AuthService) {
   
  }
  
  ngOnInit() {
    
  }
  onLogin() {
   
    this.authService.login(this.username, this.password).subscribe({
      
      next:(response) =>{
        console.log('Login response:', response);
        sessionStorage.setItem('username', response.username);
        console.log("response--username",response.username)
        sessionStorage.setItem("token", response.token);
        console.log('Token stored:', response.token);
        this.router.navigate(['bookmark']); 
        
      },
      error:(error)=>{
        this.message=true
        this.errorMessage = 'Login failed. Please try again.';
        console.log('Invalid credentials',error.message);
      }
      
    }
      // (response) => {
      //   console.log("************",response)
      //   localStorage.setItem('token', response.token); 
      //   console.log("*****1111*******",response)
      //   this.router.navigate(['bookmark']); 
      //   //this.router.navigateByUrl('/bookmark');
      // },
      // (error) => {
      //   this.errorMessage = 'Invalid credentials';
      // }
    );
  }
  
  

}



