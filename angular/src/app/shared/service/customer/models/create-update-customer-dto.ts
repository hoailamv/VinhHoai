import { EntityDto } from '@abp/ng.core';

export class CreateOrEditCustomerDto extends EntityDto<string>{
  name: string;
  dob: Date;
  address: string;
  email: string;
  phonenumber: string;

  constructor(initial: Partial<CreateOrEditCustomerDto> = {}) {
    super(initial);
  }
}
