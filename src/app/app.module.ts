import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsService, CartService } from './services';
import { InputValueRestrictDirective } from './directives';
import {
  HomeComponent,
  CartComponent,
  ProductsComponent,
  ItemComponent,
  CartItemGrpComponent,
  CartItemComponent,
  NavComponent,
} from './components';

const routes = [
 {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
 },
 {
  path: 'cart',
  component: CartComponent
 },
 {
  path: 'home',
  component: HomeComponent
 }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    ItemComponent,
    CartItemGrpComponent,
    CartItemComponent,
    NavComponent,
    InputValueRestrictDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
