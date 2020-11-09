import { OrderDto } from './order-dto';


export class GetOrderDto extends OrderDto {

  constructor(initial: Partial<GetOrderDto> = {}) {
    super(initial);
  }
}