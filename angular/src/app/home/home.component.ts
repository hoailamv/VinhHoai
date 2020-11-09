import { AuthService } from '@abp/ng.core';
import { Component, Injector, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AppBaseComponent } from '../shared/base.component';
import { CreateOrEditProductDto } from '../shared/service/product/models';
import { ProductService } from '../shared/service/product/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends AppBaseComponent implements OnInit {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(injector: Injector, private oAuthService: OAuthService, private authService: AuthService,
    private readonly _productService: ProductService) {
    super(injector)
  }
  ngOnInit(): void {
    // this.vmaa.price = 50;
    // this.vmaa.productName = "Giày Nike Phản Quang";
    // this.vmaa.productdescription = "Sneaker by Nike ";
    // this.vmaa.Imgsource = "shoe-4";
    // this._productService.saveByInput(this.vmaa).subscribe(data =>{})
  }
  vmaa: CreateOrEditProductDto = new CreateOrEditProductDto();

  onClickToGoToShop() {
    this.redirect('/shop')
  }


}
