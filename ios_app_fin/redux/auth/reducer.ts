import {AuthActions} from './actions';
import {AuthState, initialState} from './state';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions,
) {
  switch (action.type) {
    case '@@auth/LOGIN':
      if (action.token) {
        console.log(action.user);

        return {
          ...state,
          user: action.user,
          token: action.token,
          isAuthenticated: true,
        };
      } else {
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false,
        };
      }
    case '@@auth/LOGOUT':
      AsyncStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
