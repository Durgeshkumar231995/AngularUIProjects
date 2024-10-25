import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { EmpComponent } from './emp/emp.component';

const routes: Routes = [{ path: '', component: UserComponent },
{path :'user/emp',component:EmpComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
