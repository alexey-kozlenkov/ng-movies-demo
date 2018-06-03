import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app';
import { LoadUserAuthUrl, getUserAuthUrl } from './store/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserAuthUrl());
  }

  getUserAuthUrl() {
    return this.store.select(getUserAuthUrl);
  }
}
