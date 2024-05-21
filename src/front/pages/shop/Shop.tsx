import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import ProductosLista from '../../components/ui/cartasProductos';

export const Shop = () => {

  return (
    <View>
      <ScrollView>
        <ProductosLista />
      </ScrollView>
    </View>
  );
};
