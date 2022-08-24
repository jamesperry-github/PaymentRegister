import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailTableComponent } from './payment-detail-table.component';

describe('PaymentDetailTableComponent', () => {
  let component: PaymentDetailTableComponent;
  let fixture: ComponentFixture<PaymentDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDetailTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
