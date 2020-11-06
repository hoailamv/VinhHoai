import { EntityDto } from '@abp/ng.core';

export class ProductDto extends EntityDto<string>{
  productname: string;
  productdescription: string;
  CategoryId: string;
  price: number;
  quantity: string;

  constructor(initial: Partial<ProductDto> = {}) {
    super(initial);
  }
}