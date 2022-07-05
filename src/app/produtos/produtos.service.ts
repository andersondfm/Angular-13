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

  getProdutoList():Observable<any[]>{
    return this.http.get<any>(environment.UrlApi + 'api/produto')
  }

// getAll(): Observable<Produto>{
//   return this.http.get<Produto>(this.baseUrl);
// }

}
