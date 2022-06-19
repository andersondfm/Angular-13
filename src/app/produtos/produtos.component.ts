import { Component, OnInit } from '@angular/core';
import { Produto } from './models/Produtos';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  public produtos = ['Teste1, Teste2'];

  constructor(private produtosService: ProdutosService) {

  }

  ngOnInit() {
  }

}
