import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [SharedModule, ShopRoutingModule],
  declarations: [ShopComponent],
})
export class ShopModule { }
