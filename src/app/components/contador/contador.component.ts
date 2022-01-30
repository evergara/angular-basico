import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    templateUrl:'./contador.component.html',
    styleUrls: ['./contador.component.scss']
})
export class ContadorComponent{
    title: string = '01-bases';
    contador: number = 0;
    base:number = 5;
  
  
    acumular(valor: number): void {
      this.contador += valor;
    }
}