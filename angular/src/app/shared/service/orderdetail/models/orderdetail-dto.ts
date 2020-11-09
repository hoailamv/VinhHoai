import { EntityDto } from '@abp/ng.core';

export class OrderDetailDto extends EntityDto<string>{
  orderId: string;
  price: number;
  quantity: string;
  ordername: string;
  customerId: string
  imagesource: string;

  constructor(initial: Partial<OrderDetailDto> = {}) {
    super(initial);
  }
}