import { CreateOrEditCustomerDto } from './create-update-customer-dto';

export class GetCustomerForEditDto extends CreateOrEditCustomerDto {
  constructor(initial: Partial<GetCustomerForEditDto> = {}) {
    super(initial);
  }
}