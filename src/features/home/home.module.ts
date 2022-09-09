import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderModule } from 'src/shared/header/header.module';
import { FooterModule } from 'src/shared/footer/footer.module';
import { IconsModule } from 'src/shared/icons/icons.module';
import { MobileAppModule } from 'src/shared/mobile-app/mobile-app.module';
import { StepsModule } from 'src/shared/steps/steps.module';
import { OurPicksModule } from 'src/shared/our-picks/our-picks.module';
import { BestSellersModule } from 'src/shared/best-sellers/best-sellers.module';
import { CampaignsModule } from 'src/shared/campaigns/campaigns.module';
import { CategoriesModule } from 'src/shared/categories/categories.module';
import { BrandsModule } from 'src/shared/brands/brands.module';
import { CarouselModule } from 'src/shared/slider/carousel.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule,
        IconsModule,
        MobileAppModule,
        StepsModule,
        OurPicksModule,
        BestSellersModule,
        CampaignsModule,
        CategoriesModule,
        BrandsModule,
        CarouselModule
    ],
    exports: [HomeComponent],
    providers: [],
})
export class HomeModule { }