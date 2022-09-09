import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-categories-product-list',
    templateUrl: './categories-product-list.component.html',
    styleUrls: ['./categories-product-list.component.css']
})
export class CategoriesProductListComponent implements OnInit {

    //
    isLoading = false;
    productList = new Array<Product>();

    //
    constructor(
        private _httpClient: HttpClient
    ) { }

    //
    async ngOnInit() {
        this.isLoading = true;
        this.productList = await firstValueFrom(this._httpClient.get<Array<Product>>(environment.apiUrl + '/products'))
        this.productList.sort(() => Math.random() - 0.3);
        this.isLoading = false;
    }

    //
    public async onSelectCategory(categoryId: number) {
        this.isLoading = true;
        this.productList = await firstValueFrom(this._httpClient.get<Array<Product>>(environment.apiUrl + '/products'))
        this.productList.sort(() => Math.random() - 0.3);
        this.isLoading = false;
    }

    public onIncreaseClick(product: Product) {
        if (!product.count)
            product.count = 0
        product.count++
    }

    public onDecreaseClick(product: Product) {
        if (!product.count)
            product.count = 0
        if (product.count > 0)
            product.count--
    }
}
