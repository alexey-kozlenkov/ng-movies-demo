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

  constructor(public requestToken: string) {
  }
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;

  constructor(public user: User) {
  }
}

export class SetSessionId implements Action {
  readonly type = UserActionTypes.SET_SESSION_ID;

  constructor(public sessionId: string) {
  }
}

export type UserActions
  = LoadUserAuthUrl
  | LoadUserAuthUrlSuccess
  | LoadUser
  | LoadUserSuccess
  | SetSessionId
  ;
