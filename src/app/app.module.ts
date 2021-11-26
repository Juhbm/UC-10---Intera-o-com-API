import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { HeaderComponent } from './paginas/header/header.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { QuemsomosComponent } from './paginas/quemsomos/quemsomos.component';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { CuriosidadesComponent } from './paginas/curiosidades/curiosidades.component';
import { MinhacontaComponent } from './paginas/minhaconta/minhaconta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuemsomosComponent,
    ProdutosComponent,
    CuriosidadesComponent,
    MinhacontaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
