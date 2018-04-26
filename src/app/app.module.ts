import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoginComponent } from './components/admin/login/login.component';


//services
import {NavbarService} from './services/navbar/navbar.service';
import {FooterService} from './services/footer/footer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule
  ],
  providers: [
    NavbarService,
    FooterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
