import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { ELEMENT_CHARACTER_DATA, CharacterElement  } from 'src/app/core/config/dataConfig'
import {Character} from 'src/app/core/models/character';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CharactersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'resourceURI'];
  dataSources: Character[];
  expandedElement: Character | null;
  
  constructor( private router: Router, public characterService: CharactersService, private autorizationService: AuthorizationService) { 
    this.characterService.getAllCharacters().subscribe(resultData => {
      console.log("caracteres : ", resultData);
      this.dataSources = resultData['data'].results;
    });
  }

  ngOnInit() {
   
  }

  get isLogged() {
    return this.autorizationService.isLogged();
  }

  navigate(route){
    this.router.navigate([`/admin/${route}`]);
  }
}
