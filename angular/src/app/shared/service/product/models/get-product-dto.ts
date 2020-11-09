import { ProductDto } from './product-dto';


export class GetProductDto extends ProductDto {

  constructor(initial: Partial<GetProductDto> = {}) {
    super(initial);
  }
}