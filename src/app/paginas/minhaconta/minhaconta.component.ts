import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-minhaconta',
  templateUrl: './minhaconta.component.html',
  styleUrls: ['./minhaconta.component.css']
})
export class MinhacontaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User("", "") /*tem sintaxe de método/ passando valores padrão, mas geralmente inicia vazio*/

  onSubmit(){
    console.log(this.userModel) /*this é por causa da sintaxe pq a classe já está criada*/
  }

}
