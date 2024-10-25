import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AboutEmployeeComponent } from './about-employee/about-employee.component';
import { AboutCustomerComponent } from './about-customer/about-customer.component';
import { gaurdGuard } from './gaurd.guard';
import { LoginComponent } from './login/login.component';
import { canDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent,canActivate:[gaurdGuard], children: [
    { path: 'aboutEmployee', component: AboutEmployeeComponent },
    { path: 'aboutCustomer', component: AboutCustomerComponent }
  ] },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent,canDeactivate:[canDeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
