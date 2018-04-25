import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
