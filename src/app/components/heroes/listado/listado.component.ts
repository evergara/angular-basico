import { Component, OnInit } from '@angular/core';
import { Heroe } from '../model/Heroe';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  
  heroes: Heroe[] = [{
      id:1,
      name: 'Tony Start',
      nickname: 'Ironman',
      age:45

    },
    {
      id:1,
      name: 'Petter',
      nickname: 'Spiderman',
      age:35

    }
  ]

  heroesEliminado: Heroe[] = [];  
  constructor() { }

  ngOnInit(): void {
  }

  borrarHerore(index: number): void{
    console.log(index);
    let heroe =  this.heroes.splice(index, 1);
    this.heroesEliminado.push(heroe[0]);
  }
}
