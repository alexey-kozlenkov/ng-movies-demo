import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FavoriteMovieComponent } from './fav-movie/fav-movie.component';
import { MovieTitleComponent } from './movie-title/movie-title.component';
import { HighlighterDirective } from './movie-title/highlight.directive';
import { CountryToFlagPipe } from './movie-title/country-flag.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteMovieComponent,
    MovieTitleComponent,
    HighlighterDirective,
    CountryToFlagPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
