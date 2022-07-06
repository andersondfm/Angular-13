import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from './models/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient){}

  getProdutoList(): Observable<Produto>{
  return this.http.get<Produto>(environment.UrlApi + 'api/produto');
}

}
