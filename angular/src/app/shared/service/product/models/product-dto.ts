import { EntityDto } from '@abp/ng.core';

export class ProductDto extends EntityDto<string>{
  productName: string;
  productDescription: string;
  CategoryId: string;
  price: number;
  quantity: number;
  imgSource: string;

  constructor(initial: Partial<ProductDto> = {}) {
    super(initial);
  }
}