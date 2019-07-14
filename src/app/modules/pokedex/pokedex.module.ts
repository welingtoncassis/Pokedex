import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListItemComponent } from './componetes/list-item/list-item.component';
import { ListComponent } from './views/list/list.component';
import { InformationComponent } from './views/information/information.component';


@NgModule({
  declarations: [
    ListItemComponent,
    ListComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokedexRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ListComponent, ListItemComponent]
})
export class PokedexModule { }
