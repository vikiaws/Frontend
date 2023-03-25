import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewjobComponent } from './newjob/newjob.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'newjob', component:NewjobComponent},
  {path:'contact', component:ContactusComponent},
  {path:'amend',component:UpdateComponent},
  {path:'addUser',component:AdduserComponent},
  {path:'ResetPassword',component:ResetpasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
