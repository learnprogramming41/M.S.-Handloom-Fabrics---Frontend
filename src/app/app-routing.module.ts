import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {LoginComponent} from './components/admin/login/login.component';
import {AdminHomeComponent} from './components/admin/home/admin-home.component';
import {ForgotPasswordComponent} from './components/admin/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from './components/admin/change-password/change-password.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {PashminaComponent} from './components/admin/pashmina/pashmina.component';
import {PashminaDetailsComponent} from './components/admin/pashmina-details/pashmina-details.component';
import {UserPashminaDetailsComponent} from './components/user-pashmina-details/user-pashmina-details.component';
import {AccountComponent} from './components/account/account.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'admin/login', component: LoginComponent},
    {path: 'admin/home', component: AdminHomeComponent},
    {path: 'admin/forgotpassword', component: ForgotPasswordComponent},
    {path: 'admin/change-password', component: ChangePasswordComponent},
    {path: 'admin/add-pashmina', component: PashminaComponent},
    {path: 'admin/pashmina-details', component: PashminaDetailsComponent},
    {path: 'pashmina-details', component: UserPashminaDetailsComponent},
    {path: 'account', component: AccountComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
