import { EntityDto } from '@abp/ng.core';

export class CreateOrEditOrderDto extends EntityDto<string>{
  name: string;
  dob: Date;
  address: string;
  email: string;
  phonenumber: string;

  constructor(initial: Partial<CreateOrEditOrderDto> = {}) {
    super(initial);
  }
}
