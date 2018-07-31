import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../../services/footer/footer.service';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {ActivatedRoute} from '@angular/router';
import {PashminaService} from '../../../services/pashmina-service/pashmina-service';
import {PashminaModel} from '../../../model/pashmina.model';
import swal from 'sweetalert2';
import {Color} from '../../../enum/Enum';
import {ColorService} from '../../../services/color-service/color-service';
import {DescriptionService} from '../../../services/description-service/description-service';
import {PashminaColourModel} from '../../../model/color.model';
import {DescriptionModel} from '../../../model/description.model';

@Component({
    selector: 'app-pashmina-details',
    templateUrl: './pashmina-details.component.html',
    styleUrls: ['./pashmina-details.component.scss']
})
export class PashminaDetailsComponent implements OnInit {

    private pashminaId: number;
    public pashmina: PashminaModel = new PashminaModel();
    //public pashminaName: string;
    public title: string;
    public button: string;
    public colors: any[] = [];
    public isColorBox: boolean = false;
    public colorModel: PashminaColourModel = new PashminaColourModel();
    public descriptionModel: DescriptionModel = new DescriptionModel();

    constructor(
        private nav: NavbarService,
        private footer: FooterService,
        private activatedRoute: ActivatedRoute,
        private pashminaService: PashminaService,
        private colorService: ColorService,
        private descriptionService: DescriptionService
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.footer.hide();

        this.activatedRoute.queryParams.subscribe(params => {
            this.pashminaId = params['id'];
        });

        this.getPashminaById(this.pashminaId);

        for (var i in Color) {
            if (!parseInt(i, 10)) {
                this.colors.push(i);
            }
        }
    }

    public getPashminaById(pashminaId: number) {
        this.pashminaService.getPashminaById(pashminaId).subscribe(
            (result: any) => {
                this.pashmina = result;
                //this.pashminaName = result.images[0].imageName;
            }, error => {
                console.log(error);
            }
        )
    }

    public addDescription() {
        this.isColorBox = false;
        this.title = "Add Description";
        this.button = "ADD";
        this.descriptionModel.pashmina = new PashminaModel(this.pashminaId);
    }

    public deleteDescription(descriptionId: number) {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {

                this.descriptionService.deleteColor(descriptionId).subscribe(
                    result => {
                        swal(
                            'Deleted!',
                            'Description has been deleted.',
                            'success'
                        )
                    }, error => {
                        console.log(error);
                    }
                )
            }
        })
    }

    public editDescription(descriptionId: number) {
        this.isColorBox = false;
        this.title = "Edit Description";
        this.button = "UPDATE";
        this.descriptionModel.descriptionId = descriptionId;
        this.descriptionModel.pashmina = new PashminaModel(this.pashminaId);
    }

    public editPrice() {
        this.isColorBox = false;
        this.title = "Edit Price";
        this.button = "UPDATE";
    }

    public deleteColor(colorId: number) {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {

                this.colorService.deleteColor(colorId).subscribe(
                    result => {
                        swal(
                            'Deleted!',
                            'Pashmina color has been deleted.',
                            'success'
                        )
                    }, error => {
                        console.log(error);
                    }
                )
            }
        })
    }

    public addNewColor() {
        this.isColorBox = true;
        this.title = "Edit Colors";
    }

    public addColor() {
        this.colorModel.pashmina = new PashminaModel(this.pashminaId);
        this.colorService.addColor(this.colorModel).subscribe(
            result => {
                swal(
                    'Success',
                    'Color added',
                    'success'
                )
            }, error => {
                console.log(error);
            }
        )
    }

    public addOrEditDescription() {
        if (this.descriptionModel.descriptionId) {
            this.descriptionService.updateColor(this.descriptionModel).subscribe(
                result => {
                    swal(
                        'Success',
                        'Description updated',
                        'success'
                    )
                }, error => {
                    console.log(error);
                }
            )
        } else {
            this.descriptionService.addColor(this.descriptionModel).subscribe(
                result => {
                    swal(
                        'Success',
                        'Description added',
                        'success'
                    )
                }, error => {
                    console.log(error);
                }
            )
        }
    }

}
