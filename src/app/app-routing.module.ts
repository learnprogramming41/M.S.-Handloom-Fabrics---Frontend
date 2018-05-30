import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {LoginComponent} from './components/admin/login/login.component';
import {AdminHomeComponent} from './components/admin/home/admin-home.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'admin/login', component: LoginComponent},
    {path: 'admin/home', component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
