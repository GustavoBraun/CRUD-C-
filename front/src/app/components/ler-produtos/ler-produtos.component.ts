import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-ler-produtos',
  templateUrl: './ler-produtos.component.html',
  styleUrls: ['./ler-produtos.component.css']
})
export class LerProdutosComponent implements OnInit{

  idProdutoGet : string = ''

  produtoUnico : any

  listaProdutos = new Array<Produto>
  visibleLerProdutos: boolean = false;

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.retornaProdutos()
  }


  retornaProdutos() {
    let observable = this.produtoService.getAll();
    observable.subscribe(listaProdutos => {
      const entries = Object.entries(listaProdutos);
      console.log(listaProdutos);
      entries.forEach(entry => {
        this.listaProdutos.push(entry[1])        
      })
    })
  }

  retornaProdutoPorId(id: string) {
    let observable = this.produtoService.get(id);
    observable.subscribe(produto => {
      (this.produtoUnico = produto);
      console.log(this.produtoUnico);
      
    })
  }

  changeVisibleLerProdutos() {
    this.visibleLerProdutos = !this.visibleLerProdutos
  }
  
}
