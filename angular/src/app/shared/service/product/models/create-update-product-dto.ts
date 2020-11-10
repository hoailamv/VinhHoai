import { EntityDto } from '@abp/ng.core';

export class CreateOrEditProductDto extends EntityDto<string>{
  productName: string;
  productdescription: string;
  categoryId: string;
  price: number;
  quantity: number;
  imgSource: string;

  constructor(initial: Partial<CreateOrEditProductDto> = {}) {
    super(initial);
  }
}
