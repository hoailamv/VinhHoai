import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';

@NgModule({
  imports: [SharedModule, ShopRoutingModule],
  declarations: [
    ShopComponent,
    ProductDetailComponent
  ],
  exports: [ShopRoutingModule]
})
export class ShopModule { }
