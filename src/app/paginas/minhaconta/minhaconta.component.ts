import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-minhaconta',
  templateUrl: './minhaconta.component.html',
  styleUrls: ['./minhaconta.component.css']
})
export class MinhacontaComponent implements OnInit {

  constructor(private loginService: LoginService) { } //injeção de dependência, importar o login service

  ngOnInit(): void {
  }

  userModel = new User(); /*tem sintaxe de método/ passando valores padrão, mas geralmente inicia vazio*/

  mensagem = "";

  onSubmit(){
    // console.log(this.userModel) /*this é por causa da sintaxe pq a classe já está criada*/
    
    this.loginService.login(this.userModel).subscribe( (response) => {
      this.mensagem = "Login realizado com sucesso!";
      console.log(response)
    }, (error) => {
      console.log(error)
      this.mensagem = error.error;
    } )
    
  }

}
