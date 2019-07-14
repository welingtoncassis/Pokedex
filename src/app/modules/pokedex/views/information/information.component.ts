import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { takeWhile } from 'rxjs/operators';

import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {


  isAlive = true;
  pokemonNumber: any;
  pokemon: any = {};

  constructor(
      private activedRoute: ActivatedRoute,
      private pokeApi: PokeapiService
  ) { }

  ngOnInit() {
    this.activedRoute.params
    .pipe( takeWhile(() => this.isAlive)) // jeito mais eficiente de fechar as inscrições.
    .subscribe( (params) => {
      console.log(params['number']);
      this.pokemonNumber = parseInt(params['number'], 10);

      this.getPokemon();
      console.log(this.pokemonNumber);
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }


  getPokemon() {
    this.pokeApi.getPokemon(this.pokemonNumber)
    .pipe( takeWhile(() => this.isAlive))
    .subscribe( (pokemon) => {
      this.pokemon = pokemon;
    });
  }

}
