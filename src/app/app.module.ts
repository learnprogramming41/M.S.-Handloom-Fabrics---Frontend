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
import { ForgotPasswordComponent } from './components/admin/forgot-password/forgot-password.component';

//services
import {NavbarService} from './services/navbar/navbar.service';
import {FooterService} from './services/footer/footer.service';
import { LoginService } from './services/login-service/login-service';
import { AuthorizationComponent } from './components/authorization.component';

//endpoint services
import { LoginServiceEndpoint } from './services/login-service/login-service.endpoint';
import {AdminHomeComponent} from './components/admin/home/admin-home.component';

//font-awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//sweet alert
import swal from 'sweetalert2';

//spinner
import { SpinnerModule } from 'angular2-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    AdminHomeComponent,
    ForgotPasswordComponent
  ],
  imports: [
    FormsModule,
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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
