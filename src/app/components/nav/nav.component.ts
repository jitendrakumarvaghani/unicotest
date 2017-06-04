import { Component } from '@angular/core';
import { CartService } from './../../services';
import * as _ from 'underscore';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
   totalProducts = 0;
   totalCost = 0;
   constructor(private cartService: CartService) {};

   ngOnInit() {
     this.cartService.cartItems.subscribe((res) => {
       this.totalProducts = 0;
       this.totalCost = 0;
      _.map(res, (value, key) => {
        this.totalProducts = this.totalProducts + value.products.length;
        for (const product of value.products) {
          this.totalCost = product.unitCost * product.qty * product.unitsInCartons + this.totalCost;
        }
      });
     });
   }
}
