import React, {useState} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {FiltroEspecie} from '../../components/ui/FiltroEspecie';
import CartasMascota from '../../components/ui/CartasMascota';

export const Mascotas = () => {
  const [especieSeleccionada, setEspecieSeleccionada] = useState('Todo');

  const filtrarPorEspecie = (especie: any) => {
    setEspecieSeleccionada(especie);
  };

  return (
    <View>
      <ScrollView>
        <FiltroEspecie filtrarPorEspecie={filtrarPorEspecie} />
        <CartasMascota especieSeleccionada={especieSeleccionada} />
      </ScrollView>
    </View>
  );
};
