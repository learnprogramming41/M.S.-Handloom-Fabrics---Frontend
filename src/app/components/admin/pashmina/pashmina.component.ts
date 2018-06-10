import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../../../services/navbar/navbar.service';
import {FooterService} from '../../../services/footer/footer.service';
import {Category, Color} from '../../../enum/Enum';

@Component({
    selector: 'app-pashmina',
    templateUrl: './pashmina.component.html',
    styleUrls: ['./pashmina.component.scss']
})
export class PashminaComponent implements OnInit {

    public category: any[] = [];
    public colors: any[] = [];
    private localUrl: any[] = [];
    private imageName: string[] = [];
    public description: string;
    public descriptionArray: string[] = [];
    public color: string;
    public colorArray: string[] = [];

    constructor(
        private nav: NavbarService,
        private foot: FooterService,
    ) {}

    ngOnInit() {
        this.nav.hide();
        this.foot.hide();

        for (var i in Category) {
            if (!parseInt(i, 10)) {
                this.category.push(i);
            }
        }
        
        for (var i in Color) {
            if (!parseInt(i, 10)) {
                this.colors.push(i);
            }
        }
    }

    showPreviewImage(event: any) {
        this.imageName.push(event.target.files[0].name);
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.localUrl.push(event.target.result);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
        
    }
    
    removeImage(num: number) {
        this.localUrl.splice(num, 1);
        this.imageName.splice(num, 1);
    }

    addDescription() {
        if (this.description) {
            this.descriptionArray.push(this.description);
        }
    }
    
    closeDesc(num: number) {
        this.descriptionArray.splice(num, 1);
    }
    
    addColor() {
        this.colorArray.push(this.color);
    }

    closeColor(num: number) {
        this.colorArray.splice(num, 1);
    }
}
