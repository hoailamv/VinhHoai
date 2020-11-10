import { EntityDto } from '@abp/ng.core';

export class OrderDetailDto extends EntityDto<string>{
  orderId: string;
  price: number;
  quantity: number;
  orderName: string;
  customerId: string
  imagesource: string;
  size:string;

  constructor(initial: Partial<OrderDetailDto> = {}) {
    super(initial);
  }
}