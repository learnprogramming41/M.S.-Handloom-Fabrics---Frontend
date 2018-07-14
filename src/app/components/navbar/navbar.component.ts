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
        public navService: NavbarService,
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

    public goToCart() {
        if (!localStorage.getItem("userDetails")) {
            swal({
                title: 'Login Needed?',
                text: "You are not logged in. Do you want to log in?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Log in!'
            }).then((result) => {
                if (result.value) {
                    this.router.navigate(['account']);
                }
            })
        } else {
            let userId: number = JSON.parse(localStorage.getItem('userDetails'))['userId'];
            this.router.navigate(['cart'], {queryParams: {userId: userId}});
        }
    }

}
