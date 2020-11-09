import { CategoryDto } from './category-dto';


export class GetCategoryDto extends CategoryDto {

  constructor(initial: Partial<GetCategoryDto> = {}) {
    super(initial);
  }
}