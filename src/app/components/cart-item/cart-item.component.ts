import { Component, Input } from '@angular/core';
import { CartService } from './../../services';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product;
  form;
  constructor(private fb: FormBuilder, private cartService: CartService) {}
  ngOnInit() {
    this.form = this.fb.group(
      {
        qty: [this.product.qty, [Validators.required, this.isQtyValid()]],
      },
    );
  }
  onDelete(item) {
    this.cartService.deleteFromCart(item);
  }
  onQtyChange(item) {
    this.cartService.updateQtyForItem(item, this.form.value.qty);
  }
  isQtyValid() {
    return control => {
      return control.value > 0 && control.value < 100 ? null : {qtyInvalid: true};
    };
  }
}
