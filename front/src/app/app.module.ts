import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { FormsModule } from '@angular/forms';
import { LerProdutosComponent } from './components/ler-produtos/ler-produtos.component';
import { UpdateProdutoComponent } from './components/update-produto/update-produto.component';
import { DeleteProdutoComponent } from './components/delete-produto/delete-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProdutoComponent,
    LerProdutosComponent,
    UpdateProdutoComponent,
    DeleteProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
