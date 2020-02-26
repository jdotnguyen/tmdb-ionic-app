import { Component } from '@angular/core';
import { TMDbService } from '../tmdb/tmdb';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  // Data variables
  search_results_movies: any;

  // Search query
  searchQuery: string;

  constructor(
    private tmdbService: TMDbService
  ) {

  }

  runSearch() {
    this.tmdbService.getMoviesSearch(this.searchQuery)
      .subscribe(data => {
        this.search_results_movies = data;
      }, err => { });
  }

  clearList() {
    this.search_results_movies = [];
  }
}
