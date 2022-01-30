import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.scss']
})
export class HeroeCompenent{

    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombreCompleto(): string{
        return `${this.nombre} - ${this.edad}`;
    }
}