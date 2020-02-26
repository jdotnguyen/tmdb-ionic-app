import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TMDbService } from '../tmdb/tmdb';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage {
  // Data variables
  view_movie_data: {};

  constructor(
    private storage: Storage,
    private tmdbService: TMDbService,
    public toastController: ToastController
  ) {
  }

  ngOnInit(): void {
    this.storage.get('movie').then((val) => {
      this.tmdbService.getMovieDetails(val)
        .subscribe(data => {
          console.log(data);
          this.view_movie_data = data;
        }, err => { });
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Movie favourited.',
      duration: 2000
    });
    toast.present();
  }
}
