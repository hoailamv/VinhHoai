import { EntityDto } from '@abp/ng.core';

export class CategoryDto extends EntityDto<string>{
    catename: string;
    note: string;

  constructor(initial: Partial<CategoryDto> = {}) {
    super(initial);
  }
}