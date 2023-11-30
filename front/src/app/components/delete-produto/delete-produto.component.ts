import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent {
  idProdutoDelete: string = '';

  constructor(private produtoService: ProdutoService){}

  excluirProduto(id: string) {
    let observable = this.produtoService.delete(id);
    observable.subscribe(produto => {
      console.log(produto);
    })
  }
}
