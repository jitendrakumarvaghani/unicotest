import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';
import * as _ from 'underscore';

@Injectable()
export class CartService {
    private cartItemsStore = [];
    private cartItemsSubject = new Subject();
    cartItems = this.cartItemsSubject.asObservable();
    isItemStored(item) {
        if (this.cartItemsStore.length > 0) {
            for (const storedItem of this.cartItemsStore) {
                if (storedItem.id === item.id) {
                    return true;
                }
            }
        } else {
            return false;
        }
    }
    updateQtyForItem(item, qty = null) {
        for (const storedItem of this.cartItemsStore) {
            if (storedItem.id === item.id) {
              if (qty) {
                storedItem['qty'] = parseInt(qty, 10);
              }else {
                storedItem['qty'] = parseInt(storedItem.qty, 10) + 1;
              }
            }
        }
        this.getItems();
    }
    addItemsToCart(items) {
        for (const item of items) {
            if (!this.isItemStored(item)) {
                item.qty = 1;
                this.cartItemsStore.push(item);
                this.getItems();
            } else {
                this.updateQtyForItem(item);
            }
        }
    }
    getItems() {
        this.cartItemsSubject.next(this.categorizeItems(this.cartItemsStore));
    }
    categorizeItems(items) {
        const groupedItems = _.groupBy(items, 'category');
        return _.map(groupedItems, function(value, key) {
            return {
                category: key,
                products: value
            };
        });
    }
    deleteFromCart(item) {
        const filteredItems = this.cartItemsStore.filter((arrayItem) => {
            return arrayItem.id !== item.id;
        });
        this.cartItemsStore = filteredItems;
        this.getItems();
    }
}
