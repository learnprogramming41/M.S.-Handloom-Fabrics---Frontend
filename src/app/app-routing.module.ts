import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {LoginComponent} from './components/admin/login/login.component';
import {AdminHomeComponent} from './components/admin/home/admin-home.component';
import {ForgotPasswordComponent} from './components/admin/forgot-password/forgot-password.component';

const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'admin/login', component: LoginComponent},
    {path: 'admin/home', component: AdminHomeComponent},
    {path: 'admin/forgotpassword', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
