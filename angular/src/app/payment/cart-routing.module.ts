import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule { }
