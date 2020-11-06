import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetProductInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  createAt?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initial: Partial<GetProductInputDto> = {}) {
    super(initial)
  }
}