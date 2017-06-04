import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './components';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from './services';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

class RouterStub {
  navigate(params) {
  }
}

describe('AppComponent', () => {
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        CartService
      ]
    }).compileComponents();
  }));

  it('should render app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render router outlet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de ).not.toBeNull();
  }));
});
