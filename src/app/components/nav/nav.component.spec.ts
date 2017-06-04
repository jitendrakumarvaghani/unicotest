import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavComponent } from './nav.component';
import { CartService } from './../../services';
import { Subject } from 'rxjs/Rx';

import { HomeComponent, CartComponent } from './../../components';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

class RouterStub {
  navigate(params) {
  }
}

describe('NavComponent', () => {
  let comp: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let cartService: CartService;
  const cartItemsSubject = new Subject();

  const cartServiceStub = {
    cartItems: cartItemsSubject.asObservable(),
  };

  class RouterStub {
    navigate() {}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavComponent,
      ],
      providers: [
        {
          provide: CartService, useValue: cartServiceStub,
        },
        {
          provide: Router, useClass: RouterStub,
        }
      ]
    });
    fixture = TestBed.createComponent(NavComponent);
    comp = fixture.componentInstance;
    cartService = TestBed.get(CartService);
  });

  it('should display total products', () => {
    comp.totalProducts = 2;
    de = fixture.debugElement.query(By.css('.c-nav__number'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(2);
  });

  it('should display total cost', () => {
    comp.totalCost = 20;
    de = fixture.debugElement.query(By.css('.c-nav__number.dollar-prefix'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(20);
  });

});
