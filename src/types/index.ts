// Auth types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

// Student types
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CreateStudentRequest {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UpdateStudentRequest {
  firstName: string;
  lastName: string;
  email: string;
}

// Auth context types
export interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Search types
export type SearchType = 'email' | 'lastName' | 'firstName';

export interface SearchParams {
  type: SearchType;
  value: string;
}
