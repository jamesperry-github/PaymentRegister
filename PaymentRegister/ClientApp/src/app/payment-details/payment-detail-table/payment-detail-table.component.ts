import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model'
import { NgForm } from '@angular/forms';

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

  handleDelete(id: number) {
    let form: NgForm;
    try {
      this.service.handleDelete(id).subscribe(() => this.service.refreshList(), this.handleError);;
    } catch (error) {
      console.log(error);
    }
  }

  handleError(error: ERROR) {
    let { detail } = error.error;
    console.log("ERROR DETAIL", detail);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
    this.service.refreshList();
  }
}

interface ERROR {
  name: string
  message: string
  error: {
    detail: string
  }
}
