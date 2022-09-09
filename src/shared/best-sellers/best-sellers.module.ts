import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [BestSellersComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [BestSellersComponent],
    providers: [],
})
export class BestSellersModule { }