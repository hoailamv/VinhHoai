import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order/service';
import { OrderDetailService } from '../../service/orderdetail/service';

@Component({
  selector: 'app-top-bar',
  templateUrl: 'app-top-bar.component.html',
  styleUrls: ['app-top-bar.component.css']
})

export class AppTopBarComponent implements OnInit {
  
  constructor(private readonly _orderDetailService: OrderDetailService,
    private readonly _oderService: OrderService) { }

  ngOnInit() { }
}
