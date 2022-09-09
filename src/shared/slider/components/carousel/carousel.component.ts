import { Component, OnInit, ViewChild } from '@angular/core';
import { Carousel } from '../models/carousel.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

    //
    @ViewChild("carousel") carousel?: HTMLElement;

    activeSliderItemIndex = 0;

    public carouselItemList: Array<Carousel> = [
        {
            url: "assets/images/banner.png"
        },
        {
            url: "assets/images/banner.png"
        },
        {
            url: "assets/images/banner.png"
        },
        {
            url: "assets/images/banner.png"
        }
    ]

    constructor() { }

    ngOnInit(): void {
        const myCarousel = document.getElementById('myCarousel')
        myCarousel?.addEventListener('slide.bs.carousel', (event) => {
            this.activeSliderItemIndex = (event as any).to;
        })
    }

}
