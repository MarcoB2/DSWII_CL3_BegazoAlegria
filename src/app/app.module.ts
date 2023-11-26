import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { CalculadoraComponent } from './calculadora/calculadora.component';
  import { SalarioObreroComponent } from './salario-obrero/salario-obrero.component';
  import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { CharacterListComponent } from './character-list/character-list.component';

  @NgModule({
    declarations: [
      AppComponent,
      AlmacenComponent,
      ObreroComponent,
      CharactersComponent,
      CharacterListComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }