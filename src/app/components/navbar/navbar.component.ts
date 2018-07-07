import {Component, OnInit} from '@angular/core';
import {NavbarService} from './../../services/navbar/navbar.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public isLoggedIn: boolean = false;
    public fullName: string;

    constructor(
        private navService: NavbarService,
        private router: Router,
    ) {}

    ngOnInit() {
        if (localStorage.getItem("userToken") && localStorage.getItem("userDetails")) {
            this.isLoggedIn = true;
            this.fullName = JSON.parse(localStorage.getItem("userDetails")).fullName;
        }
    }

    public logout() {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userDetails");
        this.router.navigate(['/home']);
        swal(
            'Success!',
            'You are logged out of your system',
            'success'
        )
    }

}
