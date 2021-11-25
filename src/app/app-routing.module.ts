import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriosidadesComponent } from './paginas/curiosidades/curiosidades.component';
import { HomeComponent } from './paginas/home/home.component';
import { MinhacontaComponent } from './paginas/minhaconta/minhaconta.component';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { QuemsomosComponent } from './paginas/quemsomos/quemsomos.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "quemsomos", component: QuemsomosComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "curiosidades", component: CuriosidadesComponent },
  { path: "minhaconta", component: MinhacontaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
