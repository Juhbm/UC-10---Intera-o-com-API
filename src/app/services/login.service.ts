import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/login";

  constructor(private httpClient: HttpClient) { }

  // httpOptions = { //objeto para criar configurações
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  //   observe: 'response' 
  // }

  //post envia a informação da api escondida por dentro (no body da requisição) para não ter exposto a url.
  
  login(usuario: User): Observable<any>{ //o observable não pode ser tipado nesse caso porque estamos trabalhando com response e a informação tem que vir "crua".
    return this.httpClient.post(this.url, JSON.stringify(usuario), { //JSON.stringify para converter para a linguagem JSON.
      headers: new HttpHeaders({'Content-Type': 'application/json'}), //informando que vai se comunicar com a api por meio de json
      observe: 'response' //atributo para obter a resposta
    }) 
  }  
  
  

  
}
