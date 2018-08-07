import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SlideshowModule} from 'ng-simple-slideshow';
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery';

//components
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {LoginComponent} from './components/admin/login/login.component';
import {ForgotPasswordComponent} from './components/admin/forgot-password/forgot-password.component';

//services
import {NavbarService} from './services/navbar/navbar.service';
import {FooterService} from './services/footer/footer.service';
import {LoginService} from './services/login-service/login-service';
import {AuthorizationComponent} from './components/authorization.component';
import {PashminaService} from './services/pashmina-service/pashmina-service';
import {ImageService} from './services/image-service/image-service';
import {DescriptionService} from './services/description-service/description-service';
import {ColorService} from './services/color-service/color-service';
import {HomeService} from './services/home-service/home-service';
import { AccountService } from './services/account-service/account-service';
import {OrderService} from './services/order-service/order-service';

//endpoint services
import {LoginServiceEndpoint} from './services/login-service/login-service.endpoint';
import {AdminHomeComponent} from './components/admin/home/admin-home.component';
import {PashminaServiceEndpoint} from './services/pashmina-service/pashmina-service.endpoint';
import {ImageServiceEndpoint} from './services/image-service/image-service.endpoint';
import {DescriptionServiceEndpoint} from './services/description-service/description-service.endpoint';
import {ColorServiceEndpoint} from './services/color-service/color-service.endpoint';
import {HomeServiceEndpoint} from './services/home-service/home-service.endpoint';
import { AccountServiceEndpoint } from './services/account-service/account-service.endpoint';
import {OrderServiceEndpoint} from './services/order-service/order-service.endpoint';
import {DataService} from './services/data-service/data.service';

//font-awesome
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {ChangePasswordComponent} from './components/admin/change-password/change-password.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {PashminaComponent} from './components/admin/pashmina/pashmina.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {ViewPashminaDetailsComponent} from './components/admin/view-pashmina-details/view-pashmina-details.component';

//angular pagination
//import {PaginationModule} from "ng2-bootstrap";
import { PashminaDetailsComponent } from './components/admin/pashmina-details/pashmina-details.component';
import { UserPashminaDetailsComponent } from './components/user-pashmina-details/user-pashmina-details.component';
import { AccountComponent } from './components/account/account.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderDetailsComponent } from './components/admin/order-details/order-details.component';
import { ConfirmedOrderComponent } from './components/admin/confirmed-order/confirmed-order.component';
import { HistoryComponent } from './components/admin/history/history.component';
import { OutStoryComponent } from './components/out-story/out-story.component';


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
        DashboardComponent,
        ViewPashminaDetailsComponent,
        PashminaDetailsComponent,
        UserPashminaDetailsComponent,
        AccountComponent,
        ContactUsComponent,
        CartComponent,
        OrderDetailsComponent,
        ConfirmedOrderComponent,
        HistoryComponent,
        OutStoryComponent,
    ],
    imports: [
        NgxGalleryModule,
        SlideshowModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        LoadingBarRouterModule,
        AngularFontAwesomeModule,
    ],
    providers: [
        AuthorizationComponent,
        NavbarService,
        FooterService,
        LoginServiceEndpoint,
        LoginService,
        PashminaServiceEndpoint,
        PashminaService,
        ImageServiceEndpoint,
        ImageService,
        DescriptionServiceEndpoint,
        DescriptionService,
        ColorServiceEndpoint,
        ColorService,
        HomeService,
        HomeServiceEndpoint,
        AccountService,
        AccountServiceEndpoint,
        OrderServiceEndpoint,
        OrderService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
