import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../services/footer/footer.service';
import {GetInTouch} from '../../model/get-in-touch';
import swal from 'sweetalert2';
import {AccountService} from '../../services/account-service/account-service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public getInTouch: GetInTouch = new GetInTouch();

    constructor(public foot: FooterService, private accountService: AccountService) {}

    ngOnInit() {
    }

    sendEmail() {
        swal("Sending email");
        swal.showLoading();
        this.accountService.getInTouch(this.getInTouch).subscribe(
            result => {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Thank you for your review',
                    showConfirmButton: false,
                    timer: 3000
                })
                
                this.getInTouch = new GetInTouch();
            }, error => {
                swal({
                title: error,
                animation: true,
                customClass: 'animated tada',
                type: 'error'
            })
            }
        )
    }
}
