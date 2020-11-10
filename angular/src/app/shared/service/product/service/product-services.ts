import { Injectable } from '@angular/core';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { CreateOrEditProductDto, GetProductDto, GetProductForEditDto, GetProductInputDto } from '../models';

@Injectable({ providedIn: 'root' })
export class ProductService {

  apiName: "Default";

  constructor(private restService: RestService) {

  }

  getById(id: string): Observable<GetProductDto> {
    return this.restService.request({ url: `/api/app/Product/${id}`, method: 'GET' }, { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/app/Product/${id}`, method: 'DELETE' }, { apiName: this.apiName });
  }

  saveByInput(body: CreateOrEditProductDto): Observable<string> {
    return this.restService.request({ url: '/api/app/Product/save', body, method: 'POST' }, { apiName: this.apiName });
  }

  getListPagedByInput(params = {} as GetProductInputDto): Observable<PagedResultDto<GetProductDto>> {
    return this.restService.request({ url: '/api/app/Product/paged', params, method: 'GET' }, { apiName: this.apiName });
  }

  getAll(): Observable<GetProductDto[]> {
    return this.restService.request({ url: '/api/app/Product', method: 'GET' }, { apiName: this.apiName });
  }

  getListByPage(): Observable<GetProductDto[]> {
    return this.restService.request({ url: `/api/app/product/byPage`, method: 'GET' },
      { apiName: this.apiName });
  }

  filter(filter: string): Observable<GetProductDto[]> {
    return this.restService.request({ url: `/api/app/product/filterString?filter=${filter}`, method: 'POST' },
      { apiName: this.apiName });
  }

}