import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurPicksComponent } from './components/our-picks/our-picks.component';

@NgModule({
    declarations: [OurPicksComponent],
    imports: [CommonModule],
    exports: [OurPicksComponent],
    providers: [],
})
export class OurPicksModule { }