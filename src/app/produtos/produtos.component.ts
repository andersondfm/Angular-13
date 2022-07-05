import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutosService } from './produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  getProdutoList$!:Observable<any[]>;

constructor(private service:ProdutosService){}

  ngOnInit(): void {
    this.getProdutoList$ = this.service.getProdutoList();
  }

}
