import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
import {colors} from '../../../config/theme/theme';

const productos = [
  {
    idProducto: 1,
    nombreProducto: 'Whiskas',
    srcImagenProducto:
      'https://th.bing.com/th/id/OIP.zFjcsc1ka0SBkpY4RCUHIwHaHa?rs=1&pid=ImgDetMain',
    tamanoProducto: 'Pequeño',
    precioProducto: '$20000',
    Tipo: 'comida', // Identificador del tipo de producto (por ejemplo, ropa, electrónica, etc.)
    idEspecie: 'Gato', // Identificador de la especie del producto (por ejemplo, camisetas, pantalones, etc.)
  },
  {
    idProducto: 2,
    nombreProducto: 'Collar reflectante para gatos',
    srcImagenProducto:
      'https://i.etsystatic.com/27070431/r/il/723b3d/3239281181/il_1588xN.3239281181_mjyo.jpg',
    tamanoProducto: 'Pequeño',
    precioProducto: '$15000',
    Tipo: 'accesorio',
    idEspecie: 'Gato',
  },
  {
    idProducto: 3,
    nombreProducto: 'Juguete interactivo para perros',
    srcImagenProducto:
      'https://1.bp.blogspot.com/-Gii_KARIqP4/YAcvEPJ2PRI/AAAAAAAAACs/EueSmhD3HuwoqPxDrbOVr9PgB6jiZ-34ACLcBGAsYHQ/s1491/61vYs1it41L._AC_SL1500_.jpg',
    tamanoProducto: 'Mediano',
    precioProducto: '$25000',
    Tipo: 'juguete',
    idEspecie: 'Perro',
  },
  {
    idProducto: 4,
    nombreProducto: 'Cama ortopédica para perros',
    srcImagenProducto:
      'https://images-na.ssl-images-amazon.com/images/I/71WU89zyrZL._AC_SL1500_.jpg',
    tamanoProducto: 'Grande',
    precioProducto: '$50000',
    Tipo: 'accesorio',
    idEspecie: 'Perro',
  },
  {
    idProducto: 5,
    nombreProducto: 'Arnés ajustable',
    srcImagenProducto:
      'https://http2.mlstatic.com/pechera-mascotas-arnes-D_NQ_NP_727285-MLM31214769538_062019-F.jpg',
    tamanoProducto: 'Pequeño',
    precioProducto: '$12000',
    Tipo: 'accesorio',
    idEspecie: 'Gato',
  },
  // Agrega más productos aquí...
];

const ProductoCard = ({
  nombreProducto,
  srcImagenProducto,
  tamanoProducto,
  precioProducto,
  onPress,
}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.productoContainer}>
        <Image
          source={{uri: srcImagenProducto}}
          style={styles.imagenProducto}
        />
        <View style={styles.detalleContainer}>
          <Text style={styles.nombreProducto}>{nombreProducto}</Text>
          <Text>{`Tamaño: ${tamanoProducto}`}</Text>
          <Text>{`Precio: ${precioProducto}`}</Text>
          <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Comprar</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ProductosLista = () => {
  return (
    <View style={styles.listaContainer}>
      {productos.map(producto => (
        <ProductoCard
          key={producto.idProducto}
          nombreProducto={producto.nombreProducto}
          srcImagenProducto={producto.srcImagenProducto}
          tamanoProducto={producto.tamanoProducto}
          precioProducto={producto.precioProducto}
          onPress={() =>
            Alert.alert(`Se presionó comprar ${producto.nombreProducto}`)
          }
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
  productoContainer: {
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagenProducto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  detalleContainer: {
    flex: 1,
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.primary,
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

export default ProductosLista;
