import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // inject required user service and activated route
  user: any; 
  userIdInput: string = '';
  userId:number=0;
  loading: boolean = true;
  error: string | null = null;
  constructor( private route: ActivatedRoute,private userService:UserService) {}

   //  const userId = params.get('id');
   //const userId = params= params['id'];
  //subscribe to the route params to get the id and then call the getUserById method of the UserService to get the user details
  ngOnInit() {
    this.route.params.subscribe(params => {
     // const userId = params.get('id'); =>paramMap
     const userId = params= params['id'];  
      const num: number = Number(userId);
     
        this.searchUser();
     
    });
  }

  searchUser() {
    if(this.userIdInput.trim()){
      this.userService.getUserById(Number(this.userIdInput)).subscribe(
        data => {
          this.user = data;
          this.loading = false;
        },
        error => {
          this.error = 'Failed to load user';
          this.loading = false;
        }
      );
    }else{
      this.error = 'Please enter a user ID';
    }
    
  }
  


}
