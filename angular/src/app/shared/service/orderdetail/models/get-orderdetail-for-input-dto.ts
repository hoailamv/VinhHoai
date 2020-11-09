import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetOrderDetailInputDto extends PagedAndSortedResultRequestDto {
  filter: string;
  createAt?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initial: Partial<GetOrderDetailInputDto> = {}) {
    super(initial)
  }
}