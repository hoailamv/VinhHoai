import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from '../shared/base.component';

@Component({
  templateUrl: './shop.component.html',
  styleUrls: [
    'shop.component.css',
    'aos.css',
    'style.css',
    'magnific-popup.css'
  ],
})

export class ShopComponent extends AppBaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() { }

  clickToReDirect() {
    this.redirect("/shop/product-detail")
  }
}
