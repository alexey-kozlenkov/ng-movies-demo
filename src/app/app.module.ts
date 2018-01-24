import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FavoriteMovieComponent } from './fav-movie/fav-movie.component';
import { MovieSearchComponent } from './search-movie/search-movie.component';
import { SignUpComponent } from './sign-up/signup.component';
import { SignupTemplateComponent, PasswordMatchDirective } from './sign-up/sing-up-template/signup-template.component';
import { SignUpReactiveComponent } from './sign-up/sing-up-reactive/signup-reactive.component';


import { MovieCardComponent } from './movie-card/movie-card.component';
import { PageMovieListComponent } from './page-movie-list/page-movie-list.component';


@NgModule({
  declarations: [
    AppComponent,

    SignUpComponent,
    SignupTemplateComponent,
    SignUpReactiveComponent,
    PasswordMatchDirective,

    MovieCardComponent,
    PageMovieListComponent,
    FavoriteMovieComponent,
    MovieSearchComponent,
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
