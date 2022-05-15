import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PostComponent } from './post/post.component';
import { TestComponent } from './test/test.component';
import { PostService } from './post-service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DaycaresComponent } from './pages/daycares/daycares.component';
import { KidzoneService } from './kidzone.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CreateKidzoneComponent } from './create-kidzone/create-kidzone.component';
import { UpdatekidzoneComponent } from './updatekidzone/updatekidzone.component';
import { DetailsKidzoneComponent } from './details-kidzone/details-kidzone.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { ExportSubscribeComponent } from './export-subscribe/export-subscribe.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { PaymentComponent } from './payment/payment.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SubscribeService } from './subscribe.service';
import { UpdatesubscribeComponent } from './updatesubscribe/updatesubscribe.component';
import { PaypalComponent } from './paypal/paypal.component';
@NgModule({
  declarations: [
     AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    LoginComponent,
    LandingPageComponent,
    NotFoundComponent,
    AppointmentComponent,
    DaycaresComponent,
    CreateKidzoneComponent,
    UpdatekidzoneComponent,
    TestComponent,
    DetailsKidzoneComponent,
    SubscribeComponent,
    ExportSubscribeComponent,
    PaymentComponent,
    UpdatesubscribeComponent,
    PaypalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    GooglePayButtonModule,
    MatPaginatorModule,
    
    
  ],
  providers: [PostService, KidzoneService,SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
