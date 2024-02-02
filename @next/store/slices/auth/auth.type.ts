export interface AuthState {
    isAuthenticated: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    user: any;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  
  
  