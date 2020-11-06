import { EntityDto } from '@abp/ng.core';

export class CreateOrEditProductDto extends EntityDto<string>{
  productname: string;
  productdescription: string;
  categoryId: string;
  price: number;
  quantity: string;

  constructor(initial: Partial<CreateOrEditProductDto> = {}) {
    super(initial);
  }
}
