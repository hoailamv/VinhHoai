import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetOrderInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  createAt?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initial: Partial<GetOrderInputDto> = {}) {
    super(initial)
  }
}