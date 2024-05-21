import AsyncStorage from '@react-native-async-storage/async-storage';
import {enjoyourpetAPI} from '../../config/api/enjoyourpetAPI';
import {GetDataResponse} from '../../infrastructure/interfaces/getdata.response';
import {ProductResult} from '../../infrastructure/interfaces/product.response';

export const getPets = async () => {
  try {
    const {data} = await enjoyourpetAPI.get<GetDataResponse>('/pet/all');

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProducts = async () => {
  try {
    const {data} = await enjoyourpetAPI.get<ProductResult>('/product/all');

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Guardar datos
export const storeData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error guardando los datos', error);
  }
};

// Obtener datos
export const getStoreData = async (key: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error('Error obteniendo los datos', error);
  }
  return null;
};

//Eliminar Datos
export const removeStoreData = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Datos eliminados');
  } catch (error) {
    console.error('Error eliminando los datos', error);
  }
};
