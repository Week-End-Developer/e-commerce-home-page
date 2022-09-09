import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from 'src/shared/categories/models/product.model';

@Component({
    selector: 'app-best-sellers',
    templateUrl: './best-sellers.component.html',
    styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {

    //
    productList = new Array<Product>();
    isLoading = false;

    //
    constructor(
        private _httpClient: HttpClient
    ) { }

    //
    async ngOnInit(): Promise<void> {
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
