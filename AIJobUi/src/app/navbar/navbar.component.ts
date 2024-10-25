import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
 // private authService = inject(AuthService);
  private router = inject(Router);
  //user: String|null = "";
  isLoggedIn: boolean = false; // Track login state
  username!: string | null;
  
  constructor(private authService: AuthService) {
   
  }
 
  ngOnInit(): void {
    
    this.username = sessionStorage.getItem('username');
    console.log("username",this.username);
  }
  logout(){
   
    this.authService.logout();
    this.router.navigateByUrl("login");
   
  }

  
}
