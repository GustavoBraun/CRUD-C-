import { Component } from '@angular/core';
import { Produto } from './models/produto';
import { ProdutoService } from './services/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  listaProduto = new Array<Produto>

  visibleGetProdutos: boolean = false
  visibleGetProduto: boolean = false
  visibleCadastro: boolean = false
  visiblePut: boolean = false
  visibleDelete: boolean = false;
  
  constructor(private produtoService: ProdutoService){}

  changeVisibleGetProdutos() {
    this.visibleGetProdutos = !this.visibleGetProdutos
    console.log(this.visibleGetProdutos);
  }

  changeVisibleDelete() {
    this.visibleDelete = !this.visibleDelete
    console.log(this.visibleDelete);
  }
  
  changeVisibleGetProduto() {
    this.visibleGetProduto = !this.visibleGetProduto
    console.log(this.visibleGetProduto);
  }
  
  changeVisiblePut() {
    this.visiblePut = !this.visiblePut
    console.log(this.visiblePut);
  }
  
  changeVisibleCadastro() {
    this.visibleCadastro = !this.visibleCadastro
    console.log(this.visibleCadastro);
  }
    
  retornaProdutos() {
    this.listaProduto = []
    let observable = this.produtoService.getAll();
    observable.subscribe(listaProdutos => {
      const entries = Object.entries(listaProdutos);
      entries.forEach(entry => {
        console.log(entry[1]);
        this.listaProduto.push(entry[1])
      })
    })
  }

  
}
