import { SignlogComponent } from './../signlog/signlog.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { NgxPayPalModule } from 'ngx-paypal';



@NgModule({
  declarations: [

    //SignlogComponent,
    AboutUsComponent,
    ContactUsComponent,


  ],
  imports: [
    CommonModule,
    StaticpagesRoutingModule,
    NgxPayPalModule
  ]
})
export class StaticpagesModule { }
