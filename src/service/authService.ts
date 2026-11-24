
import { api } from './api';

export interface LoginData {
  email: string;
  senha: string;
}

export interface TokenResponse {
  token: string;
}

export async function fazerLogin(dados: LoginData) {
  const response = await api.post<TokenResponse>(
    '/api/wavepass/usuario/login',
    dados
  );

  return response.data;
}
