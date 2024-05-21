// para configurar la autenticación

import { enjoyourpetAPI } from '../../config/api/enjoyourpetAPI';
import type { AuthResponse } from '../../infrastructure/interfaces/auth.response';

const capitalizeWords = (name: string): string => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();
  try {
    const { data } = await enjoyourpetAPI.post<AuthResponse>('/session/log-in', {
      correo: email,
      contrasenia: password,
    });

    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authSignup = async (name: string, email: string, password: string) => {
  email = email.toLowerCase();
  name = capitalizeWords(name);
  try {
    const { data } = await enjoyourpetAPI.post<AuthResponse>('/session/sign-up', {
      nombre: name,
      correo: email,
      contrasenia: password
    });

    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authRestartPassword = async (email: string) => {
  try {
    const { data } = await enjoyourpetAPI.post<AuthResponse>('/session/restart-password', {
      correo: email
    });

    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
}

export const authCode = async (email: string, code: string) => {
  const codeint = parseInt(code);
  try {
    const { data } = await enjoyourpetAPI.post<AuthResponse>('/session/check-code', {
      correo: email,
      codigo: codeint,
    });

    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authUpdatePassword = async (email: string, code: string, password: string) => {
  const codeint = parseInt(code);
  try {
    const { data } = await enjoyourpetAPI.post<AuthResponse>('/session/update-password', {
      correo: email,
      codigo: codeint,
      nuevaCont: password
    });

    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
}