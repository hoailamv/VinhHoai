import { Injectable } from '@angular/core';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { GetCategoryForEditDto, CreateOrEditCategoryDto, GetCategoryInputDto, GetCategoryDto } from '../models';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  apiName: "Default";

  constructor(private restService: RestService) {

  }

  getById(id: string): Observable<GetCategoryForEditDto> {
    return this.restService.request({ url: `/api/app/category/${id}`, method: 'GET' }, { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/app/category/${id}`, method: 'DELETE' }, { apiName: this.apiName });
  }

  saveByInput(body: CreateOrEditCategoryDto): Observable<string> {
    return this.restService.request({ url: '/api/app/Category/save', body, method: 'POST' }, { apiName: this.apiName });
  }

  getListPagedByInput(params = {} as GetCategoryInputDto): Observable<PagedResultDto<GetCategoryDto>> {
    return this.restService.request({ url: '/api/app/Category/paged', params, method: 'GET' }, { apiName: this.apiName });
  }

  getAll(): Observable<GetCategoryDto[]> {
    return this.restService.request({ url: '/api/app/Category', method: 'GET' }, { apiName: this.apiName });
  }

  getListCategory(id: string): Observable<GetCategoryDto[]> {
    return this.restService.request({ url: `/api/app/Category/getCategoryRegisted/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

  getCategoryId(name: string): Observable<string> {
    return this.restService.request({ url: `api/app/category/CategoryName?name=${name}`, method: 'GET' },
      { apiName: this.apiName })
  }
}