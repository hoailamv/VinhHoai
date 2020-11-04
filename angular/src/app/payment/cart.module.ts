import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    CartComponent,
    CheckOutComponent,
    ThankYouComponent],
  imports: [SharedModule, CartRoutingModule],
  exports: [CartRoutingModule]
})
export class CartModule { }
