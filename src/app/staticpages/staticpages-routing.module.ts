import { AdmComponent } from './../articles/adm/adm.component';
import { SignlogComponent } from './../signlog/signlog.component';
import { HeaderComponent } from './../header/header.component';
import { BannerComponent } from './../banner/banner.component';
import { LatestArticlesComponent } from './../articles/latest-articles/latest-articles.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
//import { PaypalComponent } from '../articles/paypal/paypal.component';
//import { ArticleListComponent } from '../articles/article-list/article-list.component';

const routes: Routes = [
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'lat',component:LatestArticlesComponent},
  {path:'signn',component:HeaderComponent},
  //{path:'ar',component:ArticleListComponent}
  {path:'sign',component:SignlogComponent},
  {path:'ar',component:AdmComponent}
  //{path:'pay',component:PaypalComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
