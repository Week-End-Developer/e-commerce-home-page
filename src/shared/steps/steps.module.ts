import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './components/steps/steps.component';

@NgModule({
    declarations: [StepsComponent],
    imports: [CommonModule],
    exports: [StepsComponent],
    providers: [],
})
export class StepsModule { }