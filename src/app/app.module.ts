import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroeCompenent } from './components/heroes/heroe/heroe.component';
import { ListadoComponent } from './components/heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeCompenent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
