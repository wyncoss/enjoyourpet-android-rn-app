import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
import {getPets} from '../../../actions/data/getdata';
import {adoptPet} from '../../../actions/user/user';
import {colors} from '../../../config/theme/theme';

import {getStoreData} from '../../../actions/data/getdata';
import {Result} from '../../../infrastructure/interfaces/getdata.response';

const Carta = ({
  especie,
  imagen,
  nombre,
  edad,
  sexo,
  descripcion,
  motivo,
  id,
}: any) => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const handleAdoption = async (idPet: any) => {
    try {
      const idUser = await getStoreData('idUsuario');
      console.log('usuario ' + idUser);
      const result = await adoptPet(idPet, idUser);
      console.log(result);
      if (result && result.correcto) {
        Alert.alert(
          'Perfecto acabas de empezar tu proceso de adopcion ¡Cuidalo bien!',
        );

        ////qui deberia recargarse la vista para ver los cambios, como lo hago?
      } else {
        Alert.alert(result?.error || 'Error desconocido');
      }
    } catch (error) {
      // Manejo de errores
      console.error('Error en handleAdoption: ', error);
    }
  };

  return (
    <TouchableOpacity onPress={() => setMostrarDetalle(!mostrarDetalle)}>
      <View style={styles.ca_container}>
        <Image source={{uri: imagen}} style={styles.imagen} />
        <View
          style={[
            mostrarDetalle ? styles.overlayVisible : styles.overlayHidden,
          ]}>
          <Text style={styles.esquinaInfIzq}>{nombre}</Text>
          <Text style={styles.esquinaSupDer}>{sexo}</Text>
          <Text style={styles.esquinaInfDer}>{edad}</Text>
        </View>
        {mostrarDetalle && (
          <View style={styles.detalleContainer}>
            <Text style={styles.blacktext}>{descripcion}</Text>
            <Text style={styles.blacktext}>{motivo}</Text>
            <TouchableNativeFeedback onPress={() => handleAdoption(id)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Adoptar</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const CartasMascota = ({especieSeleccionada}: any) => {
  const [mascotas, setMascotas] = useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMascotas = await getPets();
      if (fetchedMascotas !== null) {
        setMascotas(fetchedMascotas.results);
      }
    };
    fetchData();
  }, []);

  const mascotasFiltradas =
    especieSeleccionada === 'Todo'
      ? mascotas
      : mascotas.filter(
          (mascota: Result) => mascota.especie === especieSeleccionada,
        );

  return (
    <View style={styles.listaContainer}>
      {mascotasFiltradas.map(mascota => (
        <Carta
          key={mascota.id}
          especie={mascota.especie}
          imagen={mascota.imagen}
          nombre={mascota.nombre}
          edad={mascota.edad}
          sexo={mascota.sexo}
          descripcion={mascota.descripcion}
          motivo={mascota.motivo}
          id={mascota.id}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listaContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  ca_container: {
    width: '95%',
    backgroundColor: colors.secondary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative', // Añadir posicionamiento relativo para que los elementos absolutos se posicionen respecto a este contenedor
  },
  imagen: {
    width: '100%',
    minWidth: 400,
    height: 150,
    borderRadius: 10,
  },
  esquinaInfIzq: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: 5,
    borderBottomLeftRadius: 10,
  },
  esquinaSupDer: {
    position: 'absolute',
    top: -150,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: 5,
    borderTopRightRadius: 10,
  },
  esquinaInfDer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: 5,
    borderBottomRightRadius: 10,
  },
  detalleContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overlayHidden: {
    opacity: 0,
  },
  overlayVisible: {
    opacity: 1,
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  blacktext: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartasMascota;
