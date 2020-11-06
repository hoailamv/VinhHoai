import { Injectable } from '@angular/core';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { GetCustomerForEditDto, CreateOrEditCustomerDto, GetCustomerInputDto, GetCustomerDto } from '../models';

@Injectable({ providedIn: 'root' })
export class CustomerService {

  apiName: "Default";

  constructor(private restService: RestService) {

  }

  getById(id: string): Observable<GetCustomerForEditDto> {
    return this.restService.request({ url: `/api/app/Customer/${id}`, method: 'GET' }, { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/app/Customer/${id}`, method: 'DELETE' }, { apiName: this.apiName });
  }

  saveByInput(body: CreateOrEditCustomerDto): Observable<string> {
    return this.restService.request({ url: '/api/app/Customer/save', body, method: 'POST' }, { apiName: this.apiName });
  }

  getListPagedByInput(params = {} as GetCustomerInputDto): Observable<PagedResultDto<GetCustomerDto>> {
    return this.restService.request({ url: '/api/app/Customer/paged', params, method: 'GET' }, { apiName: this.apiName });
  }

  getAll(): Observable<GetCustomerDto[]> {
    return this.restService.request({ url: '/api/app/Customer', method: 'GET' }, { apiName: this.apiName });
  }

  getListCustomer(id: string): Observable<GetCustomerDto[]> {
    return this.restService.request({ url: `/api/app/Customer/getCustomerRegisted/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

}