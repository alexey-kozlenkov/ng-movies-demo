import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { PageMovieListModule } from './page-movie-list/page-movie-list.module';
import { AuthSuccessModule } from './page-redirect-success/auth-success.module';
import { reducers } from './store/app';
import { MoviesEffect } from './store/movies/effects';
import { RouterEffects } from './store/router/effects';
import { UserEffects } from './store/user/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthSuccessModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      MoviesEffect,
      UserEffects,
      RouterEffects,
    ]),
    StoreDevtoolsModule.instrument({ name: 'Ng Movies' }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),

    PageMovieListModule,
    MovieDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
