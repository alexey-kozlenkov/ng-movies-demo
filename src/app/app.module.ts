import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './service/services.module';
import { PageMovieListModule } from './page-movie-list/page-movie-list.module';
import { SignUpModule } from './sign-up/signup.module';

import { AppComponent } from './app.component';
import { MovieDetailsModule } from './movie-details/movie-details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,

    PageMovieListModule,
    MovieDetailsModule,
    SignUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
