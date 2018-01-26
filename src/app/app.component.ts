import { Component } from '@angular/core';
import { MovieApiService } from './service/movie-api/movie-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private movieApi: MovieApiService) {}

  getUserAuthUrl() {
    return this.movieApi.getAuthUrl();
  }
}
