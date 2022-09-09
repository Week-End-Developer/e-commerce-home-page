import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HeaderTopComponent
    ],
    imports: [CommonModule],
    exports: [HeaderComponent],
    providers: [],
})
export class HeaderModule { }