import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from '../shared/base.component';
import { CategoryService } from '../shared/service/category/service';
import { CreateOrEditProductDto, GetProductDto } from '../shared/service/product/models';
import { ProductService } from '../shared/service/product/service/product-services';

@Component({
  templateUrl: './shop.component.html',
  styleUrls: [
    'shop.component.css',
    'css/aos.css',
    'css/style.css',
    'css/magnific-popup.css'
  ],
})

export class ShopComponent extends AppBaseComponent implements OnInit {
  public listProduct: GetProductDto[] = [];
  public filter: string;
  public page: number = 0
  public maxPage: number = 10;
  public countOfList: number = 0;
  public categoryId = "";
  public categoryList = ['women', 'men', 'shoe']
  vmaa:CreateOrEditProductDto = new CreateOrEditProductDto();

  constructor(injector: Injector,
    private readonly _productService: ProductService,
    private readonly _categoryService: CategoryService) {
    super(injector)
  }

  ngOnInit(): void {
    this._productService.getListByPage().subscribe(data => {
      alert(data.length)
      this.listProduct = data;
    });
  }

  onClickToNextPage() {
    if (this.page + 1 < this.countOfList) {
      this.page++
    }
  }
  onClickToBackPage() {
    if (this.page -1 > 0) {
      this.page--
    }
  }

  onClickToFilterByCategoryName(name: string) {
    this._categoryService.getCategoryId(name).subscribe(data => {
      this.categoryId = data;
    })
  }

  clickToReDirect(id: string) {
    this.redirect("/shop/product-detail/" + id);
  }

  clickToRedirectHome(){
    this.redirect("");
  }
}
