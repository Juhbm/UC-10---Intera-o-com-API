import { Component, OnInit } from '@angular/core';
import { Destaques } from 'src/app/models/destaques';
import { DestaquesService } from 'src/app/services/destaques.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaDestaques = [] as Destaques[];

  constructor(private destaquesService: DestaquesService) {}

  ngOnInit(): void {
    this.carregarDestaques();
  }

  carregarDestaques(){
    this.destaquesService.getDestaques().subscribe((destaquesRecebidos: Destaques[]) =>{
      this.listaDestaques = destaquesRecebidos
      console.log(this.listaDestaques)
    })
  }
}
