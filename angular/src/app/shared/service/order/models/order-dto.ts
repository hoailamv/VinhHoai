import { EntityDto } from '@abp/ng.core';

export class OrderDto extends EntityDto<string>{
orderdate: Date;

  constructor(initial: Partial<OrderDto> = {}) {
    super(initial);
  }
}