import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlBase = 'https://apiauladistribuidagustavo.azurewebsites.net/'


  constructor(private http: HttpClient) { }

  getAll() : Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.urlBase}Produto/`);
  }

  get(id: string): Observable<Produto>{
    return this.http.get<Produto>(`${this.urlBase}Produto/${id}`);
  }

  post(produto : Produto) : Observable<string> {
    
    return this.http.post<string>(`${this.urlBase}Produto/`, produto) 
  }

  put(id: string, produto : Produto) : Observable<Produto> {
    return this.http.put<Produto>(`${this.urlBase}Produto/${id}`, produto);  
  }
  
  delete(id: string): Observable<any>{
    return this.http.delete<Produto>(`${this.urlBase}Produto/${id}`);
  }

}


