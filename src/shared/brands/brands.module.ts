import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './components/brands/brands.component';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [BrandsComponent],
    imports: [
        CommonModule,
        SwiperModule,
    ],
    exports: [BrandsComponent],
    providers: [],
})
export class BrandsModule { }