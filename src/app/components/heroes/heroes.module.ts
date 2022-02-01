import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeCompenent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
       ListadoComponent,
       HeroeCompenent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
      CommonModule
    ],
    providers: [],

})
export class HeroesModule{}