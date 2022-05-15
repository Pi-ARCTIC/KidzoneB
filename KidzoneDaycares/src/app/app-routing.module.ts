import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateKidzoneComponent } from './create-kidzone/create-kidzone.component';
import { DetailsKidzoneComponent } from './details-kidzone/details-kidzone.component';
import { ExportSubscribeComponent } from './export-subscribe/export-subscribe.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DaycaresComponent } from './pages/daycares/daycares.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { PaypalComponent } from './paypal/paypal.component';
import { PostComponent } from './post/post.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

import { TestComponent } from './test/test.component';
import { UpdatekidzoneComponent } from './updatekidzone/updatekidzone.component';
import { UpdatesubscribeComponent } from './updatesubscribe/updatesubscribe.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'daycares', component: DaycaresComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'post', component: PostComponent},
  {path: 'login', component: LoginComponent},
  { path: 'createkidzone', component: CreateKidzoneComponent },
  { path: 'updatekidzone/:id', component: UpdatekidzoneComponent },
  { path: 'test', component: TestComponent },
  { path: 'detailskidzone/:id', component: DetailsKidzoneComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'exportpdf', component: ExportSubscribeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'updatesubscribe/:id', component: UpdatesubscribeComponent},
  { path: 'paypal', component: PaypalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
