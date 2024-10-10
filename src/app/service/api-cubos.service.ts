import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputValueCadastrarProduto } from '../../model/produtos/cadastro_produtos';

@Injectable({
  providedIn: 'root'
})
export class ApiCubosService {
  private baseUrl = 'https://api-market.pedagogico.cubos.academy/produtos'
  private headers = new HttpHeaders({
     'Content-Type': 'application/json'
  })

  constructor( private http: HttpClient) { }

  cadastrarProduto(novoProduto: InputValueCadastrarProduto): Observable<InputValueCadastrarProduto> {
    return this.http.post<InputValueCadastrarProduto>(`${this.baseUrl}/produtos`, novoProduto,{
      headers:this.headers
    })
  }
}

