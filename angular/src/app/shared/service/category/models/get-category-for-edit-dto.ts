import { CreateOrEditCategoryDto } from './create-update-category-dto';

export class GetCategoryForEditDto extends CreateOrEditCategoryDto {
  constructor(initial: Partial<GetCategoryForEditDto> = {}) {
    super(initial);
  }
}