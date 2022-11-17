import { AppDispatch } from "../../store";

export function login(user: any, token: string) {
  return {
    type: "@@auth/LOGIN" as const,
    user: user,
    token: token,
  };
}

export function logout(user: any) {
  return {
    type: "@@auth/LOGOUT" as const,
  };
}

export function restoreLogin(token: string) {
  // return async (dispatch: AppDispatch) => {
  //   const profileRes = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/profile`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     },
  //   })
  //   if (profileRes.status !== 200) {
  //     dispatch(logout());
  //     return;
  //   }
  //   const profileJson = await profileRes.json();
  //   dispatch(login(profileJson, token));
  //   localStorage.setItem('pet_token', token);
  // }
}

export type AuthActions =
ReturnType<typeof login> |
ReturnType<typeof logout>;
