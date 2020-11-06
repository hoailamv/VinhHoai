import { EntityDto } from '@abp/ng.core';

export class CreateOrEditOrderDetailDto extends EntityDto<string>{
  orderId: string;
  price: number;
  quantity: string;
  ordername: string;
  customerId: string;

  constructor(initial: Partial<CreateOrEditOrderDetailDto> = {}) {
    super(initial);
  }
}
