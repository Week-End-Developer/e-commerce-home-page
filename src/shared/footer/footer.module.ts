import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FooterBottomComponent } from './components/footer-bottom/footer-bottom.component';
import { FooterTopComponent } from './components/footer-top/footer-top.component';

@NgModule({
    declarations: [
        FooterComponent,
        FooterBottomComponent,
        FooterTopComponent
    ],
    imports: [CommonModule],
    exports: [FooterComponent],
    providers: [],
})

export class FooterModule { }