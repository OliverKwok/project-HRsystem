import { AuthActions } from "./actions";
import { AuthState, initialState } from "./state";

export function authReducer (state: AuthState = initialState, action: AuthActions){
    switch (action.type) {
        case "@@auth/LOGIN":
          return {
            ...state,
            user: action.user,
            token: action.token,
            isAuthenticated: true
          }
        case "@@auth/LOGOUT":
          return {
            ...state,
            user: null,
            token: null,
            isAuthenticated: false,
          }
        default:
          return state;
      }
    }