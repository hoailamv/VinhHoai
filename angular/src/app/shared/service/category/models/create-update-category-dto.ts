import { EntityDto } from '@abp/ng.core';

export class CreateOrEditCategoryDto extends EntityDto<string>{

  catename: string;
  note: string;

  constructor(initial: Partial<CreateOrEditCategoryDto> = {}) {
    super(initial);
  }
}
