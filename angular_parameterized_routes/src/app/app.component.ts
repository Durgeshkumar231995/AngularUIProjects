import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  users: any=[]; 
  title = 'parameter_routes_v16';
  loading: boolean = true;
  error: string | null = null;

  constructor( private route: ActivatedRoute,private userService:UserService) {}
  ngOnInit(): void {
   this.getAllUserDetails();
  }


  getAllUserDetails(){
    this.userService.getAllUser().subscribe(
     
      data => {
        console.log(data)
        this.users = data;
       
      }
  );
    }

}
