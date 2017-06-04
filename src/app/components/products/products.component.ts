import { Component } from '@angular/core';
import { ProductsService, CartService } from './../../services';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    constructor(private productsService: ProductsService, private cartService: CartService) {}
    ngOnInit() {
        this.productsService.getProducts();
    }
    addToCart(items) {
        this.cartService.addItemsToCart(items);
    }
}
