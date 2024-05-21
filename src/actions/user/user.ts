import { enjoyourpetAPI } from '../../config/api/enjoyourpetAPI';
import type { AuthResponse } from '../../infrastructure/interfaces/auth.response';

export const adoptPet = async (idPet: any, idUser: any) => {
    try {
        console.log(`/adopt/${idPet}/${idUser}`);
        const { data } = await enjoyourpetAPI.get<AuthResponse>(`/pet/adopt/${idPet}/${idUser}`);

        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}