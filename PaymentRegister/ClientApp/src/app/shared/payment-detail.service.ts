import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http"
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }
  // TODO: add api framework methods
  readonly baseUrl = `${environment.baseApiUrl}api/PaymentDetails`;
  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }

  refreshList() {
    this.http.get(this.baseUrl).toPromise().then(data => {
      console.log(data);
      this.list = data as PaymentDetail[]
    })
  }

  handleDelete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
