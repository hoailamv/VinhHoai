import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/base.component';
import { CreateOrEditOrderDto } from 'src/app/shared/service/order/models';
import { OrderService } from 'src/app/shared/service/order/service';
import { CreateOrEditOrderDetailDto } from 'src/app/shared/service/orderdetail/models/create-update-orderdetail-dto';
import { OrderDetailService } from 'src/app/shared/service/orderdetail/service';
import { GetProductDto } from 'src/app/shared/service/product/models';
import { ProductService } from 'src/app/shared/service/product/service';
declare var $;
@Component({
  templateUrl: 'product-detail.component.html',
  styleUrls: [
    'product-detail.component.css',
    'css/aos.css',
    'css/login_register-css.css',
    'css/style.css',
    'css/util.css',
  ]
})



export class ProductDetailComponent extends AppBaseComponent implements OnInit, AfterViewInit {
  get id(): string {
    return this.getParamId('id');
  }
  public vn: GetProductDto = new GetProductDto();
  public vm: CreateOrEditOrderDto = new CreateOrEditOrderDto();
  public od: CreateOrEditOrderDetailDto = new CreateOrEditOrderDetailDto();
  public quantity: number = 1;
  public size: string;
  public sizes = [
    { "name": "Small", ID: "D1", "checked": true },
    { "name": "Medium", ID: "D2", "checked": false },
    { "name": "Large", ID: "D3", "checked": false },
    { "name": "Extra", ID: "D4", "checked": false },
  ]

  constructor(injector: Injector,
    private readonly _productservice: ProductService,
    private readonly _orderdetailservice: OrderDetailService,
    private readonly _orderservice: OrderService) {
    super(injector)
  }
  ngAfterViewInit(): void {
    $(".mat-radio-outer-circle").remove();
    $(".mat-radio-inner-circle").remove();
  }

  ngOnInit(): void {
    this.vm.orderdate = new Date;
    this._orderservice.saveByInput(this.vm).subscribe();
    this._productservice.getById(this.id).subscribe(data => {
      this.vn = data;
    });

  }

  onClickaddtoCart() {
    this.od.orderId = 'BCC38E33-E8B1-496A-AF19-BBC3C2533D86'
    this.od.ordername = this.vn.productName
    this.od.quantity = 1
    this.od.price = this.od.quantity * this.vn.price
    this.od.quantity = this.quantity
    this.od.imagesource = this.vn.imgSource;
    this.od.size = this.vn.size;
    this._orderdetailservice.saveByInput(this.od).subscribe(data => { });
    this.redirect('/payment')
  }

  clickToInscreaseQuantity() {
    if (this.quantity >= 0) {
      this.quantity++;
    }
  }

  clickToDecreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
