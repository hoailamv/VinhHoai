import { Injectable } from '@angular/core';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { GetOrderDetailForEditDto, CreateOrEditOrderDetailDto, GetOrderDetailInputDto, GetOrderDetailDto } from '../models';

@Injectable({ providedIn: 'root' })
export class OrderDetailService {

  apiName: "Default";

  constructor(private restService: RestService) {

  }

  getById(id: string): Observable<GetOrderDetailForEditDto> {
    return this.restService.request({ url: `/api/app/OrderDetail/${id}`, method: 'GET' }, { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/app/OrderDetail/${id}`, method: 'DELETE' }, { apiName: this.apiName });
  }

  saveByInput(body: CreateOrEditOrderDetailDto): Observable<string> {
    return this.restService.request({ url: '/api/app/OrderDetail/save', body, method: 'POST' }, { apiName: this.apiName });
  }

  getListPagedByInput(params = {} as GetOrderDetailInputDto): Observable<PagedResultDto<GetOrderDetailDto>> {
    return this.restService.request({ url: '/api/app/OrderDetail/paged', params, method: 'GET' }, { apiName: this.apiName });
  }

  getAll(): Observable<GetOrderDetailDto[]> {
    return this.restService.request({ url: '/api/app/OrderDetail', method: 'GET' }, { apiName: this.apiName });
  }

  getListOrderDetail(id: string): Observable<GetOrderDetailDto[]> {
    return this.restService.request({ url: `/api/app/OrderDetail/getOrderDetailRegisted/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

}