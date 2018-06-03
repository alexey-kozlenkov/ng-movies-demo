import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app';
import { LoadUser } from '../store/user';

@Component({
  template: 'Auth Succeeded',
})

export class AuthSuccessComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const requestToken = this.route.snapshot.queryParams.request_token;
    this.store.dispatch(new LoadUser(requestToken));
  }
}
