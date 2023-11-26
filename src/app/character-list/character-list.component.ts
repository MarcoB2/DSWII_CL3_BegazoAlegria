import { Component, OnInit } from '@angular/core';
import { RickMortyService } from './rick-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
    this.rickMortyService.getCharacters().subscribe(
      data => {
        this.characters = data.results; // "results" contiene la lista de personajes en la respuesta de la API
      },
      error => {
        console.error('Error fetching characters:', error);
      }
    );
  }
}
