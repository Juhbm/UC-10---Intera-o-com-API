import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destaques } from '../models/destaques';

@Injectable({
  providedIn: 'root'
})
export class DestaquesService {

  url = "http://localhost:3000/destaques"; //variável criada para armazenar o endereço da API

  constructor(private httpClient: HttpClient) { } //chama o httpCliente, uqe é o que comunica com a API
  
  httpOptions = { //variável que armazena as configuções dos headers da requisição
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  //método GET, responsável por trazer os destaques de promoção da API
  getDestaques(): Observable<Destaques[]>{ //cria uma função com estrutura observable, que é do angular, e retorna um array de destaques.
    return this.httpClient.get<Destaques[]>(this.url) //retorna uma função executada pelo http client: a função get com array de destaques consultada na url.
  }
}
