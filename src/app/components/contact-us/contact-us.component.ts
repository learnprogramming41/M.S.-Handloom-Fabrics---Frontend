import {Component, OnInit} from '@angular/core';
import {GetInTouch} from '../../model/get-in-touch';
import {AccountService} from '../../services/account-service/account-service';
import swal from 'sweetalert2';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

    public getInToch: GetInTouch = new GetInTouch();

    constructor(
        private accountService: AccountService
    ) {}

    ngOnInit() {
    }

    public sendEmail() {
        swal("Sending email");
        swal.showLoading();
        this.accountService.getInTouch(this.getInToch).subscribe(
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
}
