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

  //Metodo 1
  // getProdutoList():Observable<any[]>{
  //   return this.http.get<any>(environment.UrlApi + 'api/produto')
  // }

  getProdutoList(): Observable<Produto>{
  return this.http.get<Produto>(environment.UrlApi + 'api/produto');
}

}
