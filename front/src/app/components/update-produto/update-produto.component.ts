import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent {
  nomeProduto : string = ''
  idProduto : string = ''
  descricaoProduto : string = ''
  precoProduto : number = 0
  idProdutoGet: string = '';
  quantidadesEstoqueProduto: number = 0

  constructor(private produtoService: ProdutoService){}
  atualizarProduto(nome : string, id: string, descricao : string, preco: number, quantidade: number) {
    const c = new Produto()
    c.name = nome
    c.description = descricao
    c.price= preco
    c.quantity = quantidade
    let observable = this.produtoService.put(id, c)
    observable.subscribe(s => {
      console.log(s);
    })
  }
    
}
