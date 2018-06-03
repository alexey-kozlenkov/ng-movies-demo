import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { PageMovieListModule } from './page-movie-list/page-movie-list.module';
import { AuthSuccessModule } from './page-redirect-success/auth-success.module';
import { reducers } from './store/app';
import { MoviesEffect } from './store/movies/effects';
import { UserEffects } from './store/user/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthSuccessModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      MoviesEffect,
      UserEffects,
    ]),

    PageMovieListModule,
    MovieDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
