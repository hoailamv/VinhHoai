import { OrderDetailDto } from './orderdetail-dto';


export class GetOrderDetailDto extends OrderDetailDto {

  constructor(initial: Partial<GetOrderDetailDto> = {}) {
    super(initial);
  }
}