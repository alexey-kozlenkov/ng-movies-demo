import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './reducer';

const getUserState = createFeatureSelector<UserState>('user');

export const getUserAuthUrl = createSelector(
  getUserState,
  state => state.authUrl,
);
