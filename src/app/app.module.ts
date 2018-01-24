import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FavoriteMovieComponent } from './fav-movie/fav-movie.component';
import { MovieSearchComponent } from './search-movie/search-movie.component';
import { SignUpComponent } from './sign-up/signup.component';
import { SignupTemplateComponent, PasswordMatchDirective } from './sign-up/sing-up-template/signup-template.component';
import { SignUpReactiveComponent } from './sign-up/sing-up-reactive/signup-reactive.component';


import { MovieCardComponent } from './movie-card/movie-card.component';
import { PageMovieListComponent } from './page-movie-list/page-movie-list.component';
import { LanguageToFlagPipe } from './movie-card/country-flag.pipe';
import { MovieApiService } from './service/movie-api.service';


@NgModule({
  declarations: [
    AppComponent,

    SignUpComponent,
    SignupTemplateComponent,
    SignUpReactiveComponent,
    PasswordMatchDirective,

    MovieCardComponent,
    LanguageToFlagPipe,
    PageMovieListComponent,
    FavoriteMovieComponent,
    MovieSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    MovieApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
