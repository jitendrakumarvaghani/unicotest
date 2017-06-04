import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class ProductsService {
    // url to the backend api
    // store this in config globals
    BASE_URL = 'http://localhost:1234/api';
    // make store private to this service only
    private productsStore = [];
    private productsSubject = new Subject();
    // access products publicly using observable only
    products = this.productsSubject.asObservable();
    constructor(private http: Http) {}
    // get the products from the backend api server
    getProducts() {
        this.http.get(`${this.BASE_URL}/products`).subscribe(
            response => {
                this.productsStore = response.json();
                this.productsSubject.next(this.productsStore);
            },
            error => {
                this.handleError('Error fetching products from server');
            }
        );
    }
    // handle errors fetching the response from api server
    private handleError(errorMessage) {
        console.log(errorMessage);
    }
}
