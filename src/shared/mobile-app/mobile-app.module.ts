import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileAppComponent } from './components/mobile-app/mobile-app.component';

@NgModule({
    declarations: [MobileAppComponent],
    imports: [CommonModule],
    exports: [MobileAppComponent],
    providers: [],
})
export class MobileAppModule { }