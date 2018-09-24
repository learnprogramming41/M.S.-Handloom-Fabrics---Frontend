import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../../services/navbar/navbar.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthorizationComponent } from '../authorization.component';
import { DataService } from '../../services/data-service/data.service';
import { Test1, Test2, Test3 } from '../../enum/Enum';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public isLoggedIn: boolean = false;
    public fullName: string;
    public homeNav: boolean = true;
    public aboutUsNav: boolean = false;
    public contactUsNav: boolean = false;
    public ourStoryNav: boolean = false;
    public mainCategory: any[] = [];
    public category1: any[] = [];
    public category2: any[] = [];
    public category3: any[] = [];

    // public items: any[] = [{
    //     text: 'Item1',
    //     items: [
    //         { text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] }]
    // }];

    public items: any[] = [
        {
            text: 'Our Products',
            items: [
                {
                    text: "Category one",
                    items: [
                        {
                            text: "items 1"
                        },
                        {
                            text: "items 2"
                        },
                        {
                            text: "items 3"
                        },
                    ]
                },
                {
                    text: "Category two",
                    items: [
                        {
                            text: "items 1"
                        },
                        {
                            text: "items 2"
                        },
                        {
                            text: "items 3"
                        },
                    ]
                },
                {
                    text: "Category three",
                    items: [
                        {
                            text: "items 1"
                        },
                        {
                            text: "items 2"
                        },
                        {
                            text: "items 3"
                        },
                    ]
                }
            ]
        }
    ]

    constructor(
        public navService: NavbarService,
        private router: Router,
        private auth: AuthorizationComponent,
        private data: DataService
    ) {

    }

    ngOnInit() {
        for (var i in Test1) {
            if (!parseInt(i, 10)) {
                this.category1.push(i);
            }
        }
        for (var i in Test2) {
            if (!parseInt(i, 10)) {
                this.category2.push(i);
            }
        }

        for (var i in Test3) {
            if (!parseInt(i, 10)) {
                this.category3.push(i);
            }
        }

        if (localStorage.getItem("userToken") && localStorage.getItem("userDetails")) {
            this.isLoggedIn = true;
            this.fullName = JSON.parse(localStorage.getItem("userDetails")).fullName;

            setInterval(() => {
                let tokenExpirationTime = JSON.parse(localStorage.getItem("userToken")).expiration;
                let refreshToken = JSON.parse(localStorage.getItem("userToken")).refreshToken.value;

                if (new Date(tokenExpirationTime) <= new Date()) {
                    this.auth.getAccessTokenUsingRefreshToken(refreshToken).subscribe(
                        result => {
                            localStorage.removeItem("userToken");
                            localStorage.setItem("userToken", JSON.stringify(result));
                        }, error => {

                        }
                    )
                }
            }, 3000)
        }

        this.data.currentMessage.subscribe(
            message => {
                if (message === "") {

                } else {
                    this.fullName = message;
                    this.isLoggedIn = true;

                    this.homeNav = true;
                    this.aboutUsNav = false;
                    this.contactUsNav = false;
                    this.ourStoryNav = false;
                }
            }
        )
    }

    public logout() {
        this.homeNav = true;
        this.aboutUsNav = false;
        this.contactUsNav = false;
        this.ourStoryNav = false;

        localStorage.removeItem("userToken");
        localStorage.removeItem("userDetails");
        this.router.navigate(['/home']);
        swal({
            position: 'top-end',
            type: 'success',
            title: 'You are logged out of our system',
            showConfirmButton: false,
            timer: 1500
        })
        this.isLoggedIn = false;
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
                    this.homeNav = false;
                    this.aboutUsNav = false;
                    this.contactUsNav = false;
                    this.ourStoryNav = false;

                    this.router.navigate(['account']);
                }
            })
        } else {
            let userId: number = JSON.parse(localStorage.getItem('userDetails'))['userId'];
            this.router.navigate(['cart'], { queryParams: { userId: userId } });
        }
    }

    public home() {
        this.homeNav = true;
        this.aboutUsNav = false;
        this.contactUsNav = false;
        this.ourStoryNav = false;
    }

    public aboutUs() {
        this.homeNav = false;
        this.aboutUsNav = true;
        this.contactUsNav = false;
        this.ourStoryNav = false;
    }

    public contactUs() {
        this.homeNav = false;
        this.aboutUsNav = false;
        this.contactUsNav = true;
        this.ourStoryNav = false;
    }

    public ourStory() {
        this.homeNav = false;
        this.aboutUsNav = false;
        this.contactUsNav = false;
        this.ourStoryNav = true;
    }

    public login() {
        this.homeNav = false;
        this.aboutUsNav = false;
        this.contactUsNav = false;
        this.ourStoryNav = false;
    }

    public menuClicked($event) {
        if ($event.item.text) {
            alert($event.item.text);
        }
    }
}
