import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
import { LoginService } from './services/login-service/login-service';
import { AuthorizationComponent } from './components/authorization.component';

//endpoint services
import { LoginServiceEndpoint } from './services/login-service/login-service.endpoint';


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
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule
  ],
  providers: [
    AuthorizationComponent,
    NavbarService,
    FooterService,
    LoginServiceEndpoint,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
