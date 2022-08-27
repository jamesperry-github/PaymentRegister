import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model'

@Component({
  selector: 'app-payment-detail-table',
  templateUrl: './payment-detail-table.component.html',
  styleUrls: ['./payment-detail-table.component.css']
})
export class PaymentDetailTableComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  handleDelete(payment: PaymentDetail) {
    try {
      //this.service.postPaymentDetail().subscribe(() => this.resetForm(form), this.handleError);
    } catch (error) {
      console.log(error);
    }
  }
}
