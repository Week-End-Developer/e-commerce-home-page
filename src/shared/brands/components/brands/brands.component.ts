import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay]);

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

    //
    @ViewChild("swiper") swiper?: SwiperComponent;

    //
    config: SwiperOptions = {
        modules: [Autoplay],
        autoplay: { delay: 3000 },
        slidesPerView: 9,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: true },
    };

    //
    interval: any;

    //
    constructor(
    ) { }

    //
    async ngOnInit(): Promise<void> {
        this.interval = setInterval(() => {
            this.onNextClick();
        }, 3000);
    }

    //
    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    //
    onNextClick() {
        this.swiper?.swiperRef.slideNext(400);
    }

    //
    onPrevClick() {
        this.swiper?.swiperRef.slidePrev(400);
    }

}
