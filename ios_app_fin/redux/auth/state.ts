export interface AuthState {
  // auth: any;
  user: any | null;
  token: string | null;
  isAuthenticated: boolean | null;
}

export const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};
