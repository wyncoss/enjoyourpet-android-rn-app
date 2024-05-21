import React, {useState} from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // iconos
import {colors} from '../../../config/theme/theme';

const mascotas = [
  {
    id: 1,
    especie: 'Perro',
    imagen:
      'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nombre: 'Rex',
    edad: '2 años',
    sexo: 'Macho',
    descripcion:
      'Rex es un perro enérgico y juguetón que ama correr y jugar al aire libre. Es muy leal y protector con su familia.',
    motivo:
      'Rex está en adopción porque su anterior dueño se mudó a un apartamento donde no permiten mascotas.',
  },
  {
    id: 2,
    especie: 'Perro',
    imagen:
      'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nombre: 'Luna',
    edad: '3 años',
    sexo: 'Hembra',
    descripcion:
      'Luna es una perra cariñosa y tranquila. Le encanta acurrucarse y recibir caricias. Es muy obediente y aprende rápido.',
    motivo:
      'Luna está en adopción porque su dueño actual tiene problemas de salud y no puede cuidarla adecuadamente.',
  },
  {
    id: 3,
    especie: 'Gato',
    imagen:
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nombre: 'Milo',
    edad: '1 año',
    sexo: 'Macho',
    descripcion:
      'Milo es un gato curioso y juguetón. Le gusta explorar y jugar con juguetes. Es independiente pero también disfruta de la compañía.',
    motivo:
      'Milo está en adopción porque fue rescatado de la calle y está buscando un hogar amoroso.',
  },
  {
    id: 4,
    especie: 'Gato',
    imagen:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nombre: 'Nala',
    edad: '2 años',
    sexo: 'Hembra',
    descripcion:
      'Nala es una gata dulce y cariñosa. Le encanta dormir en lugares soleados y ser acariciada. Es muy sociable y se lleva bien con otros animales.',
    motivo:
      'Nala está en adopción porque su anterior dueño se mudó al extranjero y no pudo llevarla consigo.',
  },
];

const Carta = ({
  especie,
  imagen,
  nombre,
  edad,
  sexo,
  descripcion,
  motivo,
}: any) => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  return (
    <TouchableOpacity onPress={() => setMostrarDetalle(!mostrarDetalle)}>
      <View style={styles.ca_container}>
        <Image source={{uri: imagen}} style={styles.imagen} />
        <View
          style={[
            // styles.overlay,
            mostrarDetalle ? styles.overlayVisible : styles.overlayHidden,
          ]}>
          <Text style={styles.esquinaInfIzq}>{nombre}</Text>
          <Text style={styles.esquinaSupDer}>{sexo}</Text>
          <Text style={styles.esquinaInfDer}>{edad}</Text>
        </View>
        {mostrarDetalle && (
          <View style={styles.detalleContainer}>
            <Text style={{color: colors.black}}>{descripcion}</Text>
            <Text style={{color: colors.black}}>{motivo}</Text>
            <TouchableNativeFeedback
              onPress={() => Alert.alert(`Se presionó adoptar a: ${nombre}`)}>
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
  const mascotasFiltradas =
    especieSeleccionada === 'Todo'
      ? mascotas
      : mascotas.filter(mascota => mascota.especie === especieSeleccionada);

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
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listaContainer: {
    flex: 1,
    backgroundColor: colors.primary,
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
});

export default CartasMascota;
