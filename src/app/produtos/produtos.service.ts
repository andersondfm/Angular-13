import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './models/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl = `${environment.UrlPrincipal}/api/produtos`;

constructor(private http: HttpClient) { }

getAll(): Observable<Produto>{
  return this.http.get<Produto>(this.baseUrl);
}

}
