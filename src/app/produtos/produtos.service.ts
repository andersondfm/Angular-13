import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService, ApiResult } from '../base.service';
import { Produto } from './models/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService
extends BaseService<Produto>{

  constructor(
    http: HttpClient) {
    super(http);
  }

  // getProdutoList(): Observable<Produto>{
  // return this.http.get<Produto>(environment.UrlApi + 'api/produto');
//}

getData(
  pageIndex: number,
  pageSize: number,
  sortColumn: string,
  sortOrder: string,
  filterColumn: string | null,
  filterQuery: string | null
): Observable<ApiResult<Produto>> {
  var url = this.getUrl("api/produto");
  var params = new HttpParams()
    .set("pageIndex", pageIndex.toString())
    .set("pageSize", pageSize.toString())
    .set("sortColumn", sortColumn)
    .set("sortOrder", sortOrder);

  if (filterColumn && filterQuery) {
    params = params
      .set("filterColumn", filterColumn)
      .set("filterQuery", filterQuery);
  }

  return this.http.get<ApiResult<Produto>>(url, { params });
}

get(id: number): Observable<Produto> {
  var url = this.getUrl("api/produto/" + id);
  return this.http.get<Produto>(url);
}

put(item: Produto): Observable<Produto> {
  var url = this.getUrl("api/produto/" + item.id);
  return this.http.put<Produto>(url, item);
}

post(item: Produto): Observable<Produto> {
  var url = this.getUrl("api/produto");
  return this.http.post<Produto>(url, item);
}

}
