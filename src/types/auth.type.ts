export interface AuthState {
  isLoggedIn: boolean;
  isReady: boolean;
  user: User;
  jwt: TokenResponse;
  logIn: (user: User, jwt: TokenResponse) => void;
  logOut: () => void;
}

export interface User {
  id?: string;
  nickname: string;
  role: string;
}

export interface MessageResponse {
  code: number;
  text: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  message: MessageResponse;
  user: User;
  jwt: TokenResponse;
}

export interface SignupResponse {
  message: MessageResponse;
  user: User;
}
