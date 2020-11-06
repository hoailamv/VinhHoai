import { CreateOrEditProductDto } from './create-update-product-dto';

export class GetProductForEditDto extends CreateOrEditProductDto {
  constructor(initial: Partial<GetProductForEditDto> = {}) {
    super(initial);
  }
}