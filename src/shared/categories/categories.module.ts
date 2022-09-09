import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesSideBarComponent } from './components/categories-side-bar/categories-side-bar.component';;
import { HttpClientModule } from '@angular/common/http';
import { CategoriesProductListComponent } from './components/categories-product-list/categories-product-list.component';


@NgModule({
    declarations: [
        CategoriesComponent,
        CategoriesSideBarComponent,
        CategoriesProductListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [CategoriesComponent],
    providers: [],
})
export class CategoriesModule { }