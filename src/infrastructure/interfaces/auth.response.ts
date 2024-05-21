export interface AuthResponse {
  correcto: boolean;
  error: null;
  results: Results;
}

export interface Results {
  id: number;
  correo: string;
}
