import { CustomerDto } from './customer-dto';


export class GetCustomerDto extends CustomerDto {

  constructor(initial: Partial<GetCustomerDto> = {}) {
    super(initial);
  }
}