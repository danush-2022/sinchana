import { Component, OnInit } from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal';

import {render} from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  constructor() {

    render(
    {
      id: "#Paypal",
      currency: 'USD',
      value: '100.00',
      onApprove:(details)=>{
        alert("Transaction Completed");
      }
    }
    );



  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
