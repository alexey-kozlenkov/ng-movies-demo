import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './reducer';

const getUserState = createFeatureSelector<UserState>('user');

export const getUserAuthUrl = createSelector(
  getUserState,
  state => state.authUrl,
);

export const getSessionId = createSelector(
  getUserState,
  state => state.sessionId,
);

export const getUserProfile = createSelector(
  getUserState,
  state => state.user,
);
