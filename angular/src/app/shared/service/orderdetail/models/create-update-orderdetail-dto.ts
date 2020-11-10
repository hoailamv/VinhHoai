import { EntityDto } from '@abp/ng.core';

export class CreateOrEditOrderDetailDto extends EntityDto<string>{
  orderId: string;
  price: number;
  quantity: number;
  ordername: string;
  customerId: string;
  imagesource: string;
  size:string;

  constructor(initial: Partial<CreateOrEditOrderDetailDto> = {}) {
    super(initial);
  }
}
