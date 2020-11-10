import { AuthService } from '@abp/ng.core';
import { Component, Injector, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AppBaseComponent } from '../shared/base.component';
import { CreateOrEditProductDto, GetProductDto } from '../shared/service/product/models';
import { ProductService } from '../shared/service/product/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends AppBaseComponent implements OnInit {
  
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  public productLists: GetProductDto[] = []

  constructor(injector: Injector, private oAuthService: OAuthService, private authService: AuthService,
    private readonly _productService: ProductService) {
    super(injector)
  }
  ngOnInit(): void {
    this._productService.getAll().subscribe(data =>{
      this.productLists = data.slice(0,6);
    })
  }
  vmaa: CreateOrEditProductDto = new CreateOrEditProductDto();

  onClickToGoToShop() {
    this.redirect('/shop')
  }

  clickToReDirect(id: string) {
    this.redirect("/shop/product-detail/" + id);
  }

}
