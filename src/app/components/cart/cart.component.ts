import { Component } from '@angular/core';
import { CartService } from './../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  noProductsMessage = 'There are no products added to cart.';
  constructor(private cartService: CartService) {}
  ngAfterViewInit() {
    this.cartService.getItems();
  }
}
