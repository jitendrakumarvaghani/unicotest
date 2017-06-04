import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item-grp',
  templateUrl: './cart-item-grp.component.html',
  styleUrls: ['./cart-item-grp.component.css']
})
export class CartItemGrpComponent {
  @Input() products;
}
