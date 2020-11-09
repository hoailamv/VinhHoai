import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetCustomerInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  createAt?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initial: Partial<GetCustomerInputDto> = {}) {
    super(initial)
  }
}