import { Injectable } from '@angular/core';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { GetOrderForEditDto, CreateOrEditOrderDto, GetOrderInputDto, GetOrderDto } from '../models';

@Injectable({ providedIn: 'root' })
export class OrderService {

  apiName: "Default";

  constructor(private restService: RestService) {

  }

  getById(id: string): Observable<GetOrderForEditDto> {
    return this.restService.request({ url: `/api/app/Order/${id}`, method: 'GET' }, { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/app/Order/${id}`, method: 'DELETE' }, { apiName: this.apiName });
  }

  saveByInput(body: CreateOrEditOrderDto): Observable<string> {
    return this.restService.request({ url: '/api/app/Order/save', body, method: 'POST' }, { apiName: this.apiName });
  }

  getListPagedByInput(params = {} as GetOrderInputDto): Observable<PagedResultDto<GetOrderDto>> {
    return this.restService.request({ url: '/api/app/Order/paged', params, method: 'GET' }, { apiName: this.apiName });
  }

  getAll(): Observable<GetOrderDto[]> {
    return this.restService.request({ url: '/api/app/Order', method: 'GET' }, { apiName: this.apiName });
  }

  getListOrder(id: string): Observable<GetOrderDto[]> {
    return this.restService.request({ url: `/api/app/Order/getOrderRegisted/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

}