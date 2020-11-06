import { CreateOrEditOrderDto } from './create-update-order-dto';

export class GetOrderForEditDto extends CreateOrEditOrderDto {
  constructor(initial: Partial<GetOrderForEditDto> = {}) {
    super(initial);
  }
}