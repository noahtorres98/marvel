import { Component, OnInit } from '@angular/core';
import { MarvelService } from './services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private marvelService: MarvelService) {}

  characters: any[] = [];

  ngOnInit() {
    this.marvelService.getMarvelCharacters().subscribe((res) => {
      this.characters = res.data.results;
    });
  }

  title = 'marvelProject';
}
