import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[]=[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    //llamamos a los heroes que estan en heroesservice en el metodo getheroes
    this.heroesService.getHeroes().subscribe(resp=>{
      this.heroes = resp
    });
  }

}
