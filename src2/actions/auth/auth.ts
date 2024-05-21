// para configurar la autenticación

import {enjoyourpetAPI} from '../../config/api/enjoyourpetAPI';
import type {AuthResponse} from '../../infrastructure/interfaces/auth.response';

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();
  try {
    const {data} = await enjoyourpetAPI.post<AuthResponse>('/session/login', {
      email,
      password,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

authLogin('qwfowq@gmail.com', '123456');
