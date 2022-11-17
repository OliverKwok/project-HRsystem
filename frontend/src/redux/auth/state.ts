export interface AuthState {
    user: any|null;
    token:string|null;
    isAuthenticated: boolean | null;
}

export const initialState: AuthState = {
    user: null,
    token:null,
    isAuthenticated: null,
}