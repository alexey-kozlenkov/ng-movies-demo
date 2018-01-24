import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FavoriteMovieComponent } from './fav-movie/fav-movie.component';
import { MovieTitleComponent } from './movie-title/movie-title.component';
import { HighlighterDirective } from './movie-title/highlight.directive';
import { CountryToFlagPipe } from './movie-title/country-flag.pipe';
import { MovieSearchComponent } from './search-movie/search-movie.component';
import { SignUpComponent } from './sign-up/signup.component';
import { SignupTemplateComponent, NameDirective } from './sign-up/sing-up-template/signup-template.component';
import { SignUpReactiveComponent } from './sign-up/sing-up-reactive/signup-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteMovieComponent,
    MovieTitleComponent,
    HighlighterDirective,
    CountryToFlagPipe,

    MovieSearchComponent,
    SignUpComponent,
    SignupTemplateComponent,
    SignUpReactiveComponent,
    NameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
