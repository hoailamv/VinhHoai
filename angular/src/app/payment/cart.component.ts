import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from '../shared/base.component';
import { OrderService } from '../shared/service/order/service';
import { GetOrderDetailDto } from '../shared/service/orderdetail/models';
import { OrderDetailService } from '../shared/service/orderdetail/service';

@Component({
  templateUrl: 'cart.component.html',
  styleUrls: [
    'cart.component.css',
    'css/aos.css',
    'css/style.css',
  ]
})

export class CartComponent extends AppBaseComponent implements OnInit {
  constructor(injector: Injector,
    private readonly _orderdetailservice: OrderDetailService,
    private readonly _orderservice: OrderService) {
    super(injector)
    }
  public vm: GetOrderDetailDto[]=[]
  public money: number = 0
  ngOnInit() {
    this._orderdetailservice.getOrderCart('BCC38E33-E8B1-496A-AF19-BBC3C2533D86').subscribe(data => 
      {this.vm=data
       data.forEach(x=>{
         this.money+=x.price;
       }) 
      });
   }
  onClicktoDeleteOrderDetail(id: string){
    this._orderdetailservice.deleteById(id).subscribe();
  }
  onClicktoCheckOut(){
    this.redirect('/payment/check-out')
  }
}
