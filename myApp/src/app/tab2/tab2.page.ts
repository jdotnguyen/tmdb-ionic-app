import { Component } from '@angular/core';
import { TMDbService } from '../tmdb/tmdb';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // Data variables
  whats_hot_movies: any;

  constructor(
    private tmdbService: TMDbService
  ) {

  }

  ngOnInit(): void {
    this.tmdbService.getMoviesWhatsHot()
      .subscribe(data => {
        this.whats_hot_movies = data;
      }, err => { });
  }
}
