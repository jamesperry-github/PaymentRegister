import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    try {
      this.service.postPaymentDetail().subscribe(() => this.resetForm(form), this.handleError);
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
  }

}

interface ERROR {
  name: string
  message: string
  error: {
    detail: string
  }
}
