import { EntityDto } from '@abp/ng.core';

export class CreateOrEditOrderDto extends EntityDto<string>{
  orderdate: Date;
  constructor(initial: Partial<CreateOrEditOrderDto> = {}) {
    super(initial);
  }
}
