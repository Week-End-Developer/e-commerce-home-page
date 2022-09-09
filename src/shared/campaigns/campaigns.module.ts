import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsComponent } from './components/campaigns/campaigns.component';

@NgModule({
    declarations: [CampaignsComponent],
    imports: [CommonModule],
    exports: [CampaignsComponent],
    providers: [],
})
export class CampaignsModule { }