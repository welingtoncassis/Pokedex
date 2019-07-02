import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter = '';
  selectedPkm = null;

  constructor(
    private pokeapi: PokeapiService
  ) { }


  get pokemonList() {
    return this.pokeapi.pokeList.filter( pokemon => {
      return pokemon.name.toLocaleLowerCase().indexOf(this.nameFilter.toLocaleLowerCase()) !== -1;
    });
  }

  get pkmSprite() {
  // tslint:disable-next-line: variable-name
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  ngOnInit() {
  }

  selectPokemon(pkm) {
    this.selectedPkm = pkm;
  }

}
