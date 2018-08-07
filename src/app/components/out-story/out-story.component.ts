import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';
import {NavbarService} from '../../services/navbar/navbar.service';
import {FooterService} from '../../services/footer/footer.service';

@Component({
    selector: 'app-out-story',
    templateUrl: './out-story.component.html',
    styleUrls: ['./out-story.component.scss']
})
export class OutStoryComponent implements OnInit {

    constructor(
        private nav: NavbarService,
        private foot: FooterService,
    ) {}

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit() {
        this.nav.show();
        this.foot.show();

        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            },
            //image auto play
            { 
                imageAutoPlay: true, 
                imageAutoPlayPauseOnHover: true, 
                previewAutoPlay: true, 
                previewAutoPlayPauseOnHover: true 
            }
        ];

        this.galleryImages = [
            {
                small: '../../../assets/IMG-20180801-WA0001.jpg',
                medium: '../../../assets/IMG-20180801-WA0001.jpg',
                big: '../../../assets/IMG-20180801-WA0001.jpg'
            },
            {
                small: '../../../assets/IMG-20180802-WA0001.jpg',
                medium: '../../../assets/IMG-20180802-WA0001.jpg',
                big: '../../../assets/IMG-20180802-WA0001.jpg'
            },
            {
                small: '../../../assets/IMG-20180802-WA0002.jpg',
                medium: '../../../assets/IMG-20180802-WA0002.jpg',
                big: '../../../assets/IMG-20180802-WA0002.jpg'
            }
        ];
    }
}
