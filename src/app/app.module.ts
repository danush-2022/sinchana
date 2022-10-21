import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AccountserviceService } from './account/accountservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from './account/account.module';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { SignlogComponent } from './signlog/signlog.component';



//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
   // CommonModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent,



  ],
  imports: [
    //CommonModule,
    BrowserModule,
    HttpClientModule,

    ArticlesModule,
    StaticpagesModule,
    AccountModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,




  ],
  providers: [AccountserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
