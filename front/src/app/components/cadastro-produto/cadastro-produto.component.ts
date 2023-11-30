import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {

  nomeProduto : string = ''
  idProduto : number = 0
  descricaoProduto : string = ''
  precoProduto : number = 0
  idProdutoGet: string = '';
  quantidadesEstoqueProduto: number = 0

  constructor(private produtoService: ProdutoService){}

  criarProduto(nomeProduto: string, idProduto: number, descricaoProduto : string, precoProduto: number, quantidadesEstoqueProduto : number) {
    const c = new Produto()
    c.name = nomeProduto
    c.id = idProduto
    c.description = descricaoProduto
    c.price = precoProduto
    c.quantity = quantidadesEstoqueProduto
    let observable = this.produtoService.post(c);
    observable.subscribe(s => {
      console.log("Novo produto adicionado:" + s);
    })
  }


}
