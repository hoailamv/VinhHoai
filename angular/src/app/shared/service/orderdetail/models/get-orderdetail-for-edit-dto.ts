import { CreateOrEditOrderDetailDto } from './create-update-Orderdetail-dto';

export class GetOrderDetailForEditDto extends CreateOrEditOrderDetailDto {
  constructor(initial: Partial<GetOrderDetailForEditDto> = {}) {
    super(initial);
  }
}