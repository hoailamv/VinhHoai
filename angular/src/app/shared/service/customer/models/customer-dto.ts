import { EntityDto } from '@abp/ng.core';

export class CustomerDto extends EntityDto<string>{
    name: string;
    dob: Date;
    address: string;
    email: string;
    phonenumber: string;

  constructor(initial: Partial<CustomerDto> = {}) {
    super(initial);
  }
}