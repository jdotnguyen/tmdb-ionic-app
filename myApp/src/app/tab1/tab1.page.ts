import { Component } from '@angular/core';
import { TMDbService } from '../tmdb/tmdb';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // Data variables
  now_playing_movies: any;

  constructor(
    private tmdbService: TMDbService
  ) {
    
  }

  ngOnInit(): void {
    this.tmdbService.getMoviesNowPlaying()
      .subscribe(data => {
        this.now_playing_movies = data;
      }, err => { });
  }
}
