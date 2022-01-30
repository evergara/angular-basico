import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = '01-bases';
  contador: number = 0;

  suma(): void{
    this.contador +=1;
  }

  resta(): void{
    this.contador -=1;
  }
}
