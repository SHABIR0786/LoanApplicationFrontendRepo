import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAHomeComponent } from './buy-a-home.component';

describe('BuyAHomeComponent', () => {
  let component: BuyAHomeComponent;
  let fixture: ComponentFixture<BuyAHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
