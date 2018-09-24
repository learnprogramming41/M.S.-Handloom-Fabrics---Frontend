import { Component, OnInit, ViewChild } from '@angular/core';
import { PashminaModel } from '../../model/pashmina.model';
import { HomeService } from '../../services/home-service/home-service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { OrderModel } from '../../model/order.model'
import { UserModel } from '../../model/user.model';
import { OrderService } from '../../services/order-service/order-service';
import { GetInTouch } from '../../model/get-in-touch';
import { AccountService } from '../../services/account-service/account-service';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-user-pashmina-details',
    templateUrl: './user-pashmina-details.component.html',
    styleUrls: ['./user-pashmina-details.component.scss']
})
export class UserPashminaDetailsComponent implements OnInit {

    @ViewChild("windowReference") window: jqxWindowComponent;

    public pashmina: PashminaModel = new PashminaModel();
    public similarPashmina: PashminaModel[] = [];
    private pashminaId = 0;
    public pashminaName: string;
    public pashminaPrice: number;
    public price: number;
    public number: number;
    public address: number;
    public orderModel: OrderModel = new OrderModel();
    public getInTouch: GetInTouch = new GetInTouch();

    public image1: string;
    public image2: string;
    private pashminaCategory: string;

    public reviews: boolean = false;
    public details: boolean = false;
    public windowOne: boolean = false;
    public windowTwo: boolean = false;
    public windowThree: boolean = false;

    public states: string[] = [];
    public citites: string[] = [];

    public phoneNumber: any;
    public state: string;
    public city: string;
    public anotherCity: string;

    public isLoggedInUser: boolean = false;

    constructor(
        private homeService: HomeService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private orderService: OrderService,
        private http: HttpClient,
    ) {
    }

    ngOnInit() {
        window.scrollTo(0, 0);
        this.activatedRoute.queryParams.subscribe(params => {
            this.pashminaId = params['id'];
        });

        this.getPashminaById(this.pashminaId);
        this.details = true;

        this.http.get("http://localhost:4200/assets/cities.json").subscribe((res: any) => {
            res.forEach((element: any) => {
                if (!this.states.includes(element.state)) {
                    this.states.push(element.state);
                }
                if (!this.citites.includes(element.name)) {
                    this.citites.push(element.name);
                }
            });
        })

    }

    private getPashminaById(id: number) {
        this.homeService.getPashminaById(id).subscribe(
            result => {
                this.pashmina = result;
                this.pashminaName = this.pashmina.images[0].imageName;
                this.image1 = this.pashmina.images[1] ? this.pashmina.images[1].imageName : null;
                this.image2 = this.pashmina.images[2] ? this.pashmina.images[2].imageName : null;
                this.pashminaCategory = this.pashmina.category;

                this.getSimilarProduct(this.pashminaCategory);
            }, error => {
                console.log(error);
            }
        )
    }

    public calculatePrice(quantity: number) {
        this.pashminaPrice = this.price * quantity;
    }


    public close() {
        this.windowOne = false;
    }


    public addToCart() {
        if (!this.orderModel.quantity || this.orderModel.quantity == 0) {
            swal({
                title: 'Quantity is empty',
                animation: true,
                customClass: 'animated tada',
                type: 'error'
            })
        } else {
            if (!localStorage.getItem("userDetails")) {
                swal({
                    title: 'Login Needed?',
                    text: "You are not logged in. Do you want to log in?",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Log in!',
                    cancelButtonText: 'Order as guest'
                }).then((result) => {
                    if (result.value) {
                        this.router.navigate(['account']);
                    } else {
                        this.isLoggedInUser = false;
                        this.windowOne = true;
                    }
                })
            } else {
                this.isLoggedInUser = true;
                this.windowOne = true;
            }
        }
    }

    public getSimilarProduct(category: string) {
        this.homeService.getPashminaByCategory(category, 3, 0).subscribe(
            (result: any) => {
                this.similarPashmina = result;
            }, error => {
                console.log(error);
            }
        )
    }

    public sendEmail() {
        swal("Sending email");
        swal.showLoading();
        this.getInTouch.subject = "User Review";
        this.accountService.getInTouch(this.getInTouch).subscribe(
            result => {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Thank you for your review',
                    showConfirmButton: false,
                    timer: 3000
                })
            }, error => {
                console.log(error);
            }
        )
    }

    public zoom(imageUrl: string) {
        swal({
            imageUrl: imageUrl,
            imageWidth: 600,
            imageHeight: 400,
            animation: false,
            showConfirmButton: false,
        })
    }

    public showDetails() {
        this.details = true;
        this.reviews = false;
    }

    public showReview() {
        this.details = false;
        this.reviews = true;
    }

    public goToSimilarPashmina(id: number) {
        this.getPashminaById(id);
        window.scrollTo(0, 0);
    }

    private orderSwal(user: boolean) {
        this.windowOne = true;
        // (swal as any).mixin({
        //     input: 'text',
        //     confirmButtonText: 'Next &rarr;',
        //     showCancelButton: true,
        //     progressSteps: ['1', '2']
        // }).queue([
        //     {
        //         title: 'Confirmation',
        //         text: 'Please provide us your full address'
        //     },
        //     'Please provide us your contact number'
        // ]).then((result) => {
        //     if (result.value) {
        //         this.orderModel.shippingAddress = result.value[0];
        //         this.orderModel.contact = result.value[1];
        //         this.orderModel.pashminaId = new PashminaModel(this.pashminaId);
        //         if(user) {
        //             this.orderModel.userId = new UserModel(JSON.parse(localStorage.getItem("userDetails"))["userId"]);
        //             if (!result.value[0] || !result.value[1]) {
        //                 swal({
        //                     title: 'All fields are required',
        //                     animation: true,
        //                     customClass: 'animated tada',
        //                     type: 'error'
        //                 })
        //             } else {
        //                 this.orderService.orderPashmina(this.orderModel).subscribe(
        //                     result => {
        //                         swal({
        //                             title: 'Hurrey!',
        //                             type: 'success',
        //                             html: '<p>You have successfully added to a cart.</p><p>We will delivered a items with in 3 business day</p>',
        //                             width: 600,
        //                             background: '#fff',
        //                             backdrop: `
        //                             rgba(0,0,123,0.4)
        //                             url("http://www.animatedimages.org/data/media/466/animated-thank-you-image-0023.gif")
        //                             center left
        //                             no-repeat
        //                           `
        //                         }).then((result) => {
        //                             if (result.value) {
        //                                 this.router.navigate(['/home']);
        //                             }
        //                         })
        //                     }, error => {
        //                         console.log(error);
        //                     }
        //                 )
        //             }
        //         } else {
        //             this.orderModel.userId = new UserModel(341);
        //             if (!result.value[0] || !result.value[1]) {
        //                 swal({
        //                     title: 'All fields are required',
        //                     animation: true,
        //                     customClass: 'animated tada',
        //                     type: 'error'
        //                 })
        //             } else {
        //                 this.orderService.orderAsGuest(this.orderModel).subscribe(
        //                     result => {
        //                         swal({
        //                             title: 'Hurrey!',
        //                             type: 'success',
        //                             html: '<p>You have successfully added to a cart.</p><p>We will delivered a items with in 3 business day</p>',
        //                             width: 600,
        //                             background: '#fff',
        //                             backdrop: `
        //                             rgba(0,0,123,0.4)
        //                             url("http://www.animatedimages.org/data/media/466/animated-thank-you-image-0023.gif")
        //                             center left
        //                             no-repeat
        //                           `
        //                         }).then((result) => {
        //                             if (result.value) {
        //                                 this.router.navigate(['/home']);
        //                             }
        //                         })
        //                     }, error => {
        //                         console.log(error);
        //                     }
        //                 )
        //             }
        //         }
        //     }
        // })
    }

    public previous() {
        this.windowTwo = false;
        this.windowOne = true;
        this.windowThree = false;
    }

    public openWindowTwo() {
        this.windowOne = false;
        this.windowThree = false;
        this.windowTwo = true;
    }

    public openWindowThree() {
        this.windowTwo = false;
        this.windowOne = false;
        this.windowThree = true;
    }

    public stateChange(state) {
        this.state = state;
    }

    public cityChange(city) {
        this.city = city;
    }

    public phoneChange(phone) {
        this.phoneNumber = phone.target.value;
    }

    public anotherAddress($event) {
        this.anotherCity = $event.target.value;
    }

    public orderConfirm() {
        this.windowThree = false;
        this.orderModel.shippingAddress = this.state + "," + this.city + "," + this.anotherCity
        this.orderModel.contact = this.phoneNumber;
        this.orderModel.pashminaId = new PashminaModel(this.pashminaId);
        if (this.isLoggedInUser) {
            this.orderModel.userId = new UserModel(JSON.parse(localStorage.getItem("userDetails"))["userId"]);
            this.orderService.orderPashmina(this.orderModel).subscribe(
                result => {
                    swal({
                        title: 'Hurrey!',
                        type: 'success',
                        html: '<p>You have successfully added to a cart.</p><p>We will delivered a items with in 3 business day</p>',
                        width: 600,
                        background: '#fff',
                        backdrop: `
                                    rgba(0,0,123,0.4)
                                    url("http://www.animatedimages.org/data/media/466/animated-thank-you-image-0023.gif")
                                    center left
                                    no-repeat
                                  `
                    }).then((result) => {
                        if (result.value) {
                            this.router.navigate(['/home']);
                        }
                    })
                }, error => {
                    console.log(error);
                }
            )

        } else {
            this.orderModel.userId = new UserModel(341);
            this.orderService.orderAsGuest(this.orderModel).subscribe(
                result => {
                    swal({
                        title: 'Hurrey!',
                        type: 'success',
                        html: '<p>You have successfully added to a cart.</p><p>We will delivered a items with in 3 business day</p>',
                        width: 600,
                        background: '#fff',
                        backdrop: `
                                    rgba(0,0,123,0.4)
                                    url("http://www.animatedimages.org/data/media/466/animated-thank-you-image-0023.gif")
                                    center left
                                    no-repeat
                                  `
                    }).then((result) => {
                        if (result.value) {
                            this.router.navigate(['/home']);
                        }
                    })
                }, error => {
                    console.log(error);
                }
            )
        }
    }
}
