import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from '../../base.component';
import { OrderService } from '../../service/order/service';
import { OrderDetailService } from '../../service/orderdetail/service';

@Component({
  selector: 'app-top-bar',
  templateUrl: 'app-top-bar.component.html',
  styleUrls: ['app-top-bar.component.css']
})

export class AppTopBarComponent extends AppBaseComponent implements OnInit {

  public countOfN: number = 0;
  constructor(injector: Injector,
    private readonly _orderDetailService: OrderDetailService,
    private readonly _oderService: OrderService) {
    super(injector);
  }

  ngOnInit() {
    const id = 'BCC38E33-E8B1-496A-AF19-BBC3C2533D86';
    this._orderDetailService.countOfProductInCart(id.toLowerCase()).subscribe(data => {
      this.countOfN = data;
    });
  }
}
