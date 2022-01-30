import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = '01-bases';
  contador: number = 0;
  base:number = 5;


  acumular(valor: number): void {
    this.contador += valor;
  }
}
