import { Action } from '@ngrx/store';
import { User } from '../../types/user';

export enum UserActionTypes {
  LOAD_AUTH_URL = '[User] Get Auth URL',
  LOAD_AUTH_URL_SUCCESS = '[User] Get Auth URL Success',
  LOAD_USER = '[User] Load User',
  LOAD_USER_SUCCESS = '[User] Load User Success',
  SET_SESSION_ID = '[User] Set Session Id'
}

export class LoadUserAuthUrl implements Action {
  readonly type = UserActionTypes.LOAD_AUTH_URL;
}

export class LoadUserAuthUrlSuccess implements Action {
  readonly type = UserActionTypes.LOAD_AUTH_URL_SUCCESS;
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LOAD_USER;
  requestToken: string;

  constructor(token: string) {
    this.requestToken = token;
  }
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;
  user: User;

  constructor(user: User) {
    this.user = user;
  }
}

export class SetSessionId implements Action {
  readonly type = UserActionTypes.SET_SESSION_ID;
  sessionId: string;

  constructor(sessionId: string) {
    this.sessionId = sessionId;
  }
}

export type UserActions
  = LoadUserAuthUrl
  | LoadUserAuthUrlSuccess
  | LoadUser
  | LoadUserSuccess
  | SetSessionId
  ;
