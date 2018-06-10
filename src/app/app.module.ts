import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoginComponent } from './components/admin/login/login.component';
import { ForgotPasswordComponent } from './components/admin/forgot-password/forgot-password.component';

//services
import {NavbarService} from './services/navbar/navbar.service';
import {FooterService} from './services/footer/footer.service';
import { LoginService } from './services/login-service/login-service';
import { AuthorizationComponent } from './components/authorization.component';
import {PashminaService} from './services/pashmina-service/pashmina-service';

//endpoint services
import { LoginServiceEndpoint } from './services/login-service/login-service.endpoint';
import {AdminHomeComponent} from './components/admin/home/admin-home.component';
import {PashminaServiceEndpoint} from './services/pashmina-service/pashmina-service.endpoint';

//font-awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//sweet alert
import swal from 'sweetalert2';

//spinner
import { SpinnerModule } from 'angular2-spinner';
import { ChangePasswordComponent } from './components/admin/change-password/change-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PashminaComponent } from './components/admin/pashmina/pashmina.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    AdminHomeComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PageNotFoundComponent,
    PashminaComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    AngularFontAwesomeModule,
    SpinnerModule
  ],
  providers: [
    AuthorizationComponent,
    NavbarService,
    FooterService,
    LoginServiceEndpoint,
    LoginService,
    PashminaServiceEndpoint,
    PashminaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
