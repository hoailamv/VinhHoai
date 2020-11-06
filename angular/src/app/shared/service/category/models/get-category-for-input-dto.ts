import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetCategoryInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  createAt?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initial: Partial<GetCategoryInputDto> = {}) {
    super(initial)
  }
}