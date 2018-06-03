import { User } from '../../types/user';
import { UserActions, UserActionTypes } from './actions';

export interface UserState {
  authUrl: string;
  sessionId: string;
  user: User;
}

const initialUserState: UserState = {
  authUrl: null,
  sessionId: null,
  user: null,
};

export const userReducer = (
  state: UserState = initialUserState,
  action: UserActions,
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOAD_AUTH_URL_SUCCESS:
      return { ...state, authUrl: action.url };

    case UserActionTypes.LOAD_USER_SUCCESS:
      return { ...state, user: action.user };

    case UserActionTypes.SET_SESSION_ID:
      return { ...state, sessionId: action.sessionId };

    default:
      return state;
  }
};
