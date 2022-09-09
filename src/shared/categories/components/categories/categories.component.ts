import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CategoriesProductListComponent } from '../categories-product-list/categories-product-list.component';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    //
    @ViewChild("productListComponent") productListComponent?: CategoriesProductListComponent;

    //
    @Output() onSelectChange = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    onSelectCategory(categoryId: number) {
        this.productListComponent?.onSelectCategory(categoryId);
    }

}
