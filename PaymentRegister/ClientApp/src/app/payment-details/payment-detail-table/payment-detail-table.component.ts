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

  // refreshData(selectedRecord: PaymentDetail) {
  //   this.service.formData = Object.assign({}, selectedRecord);
  // }
}
