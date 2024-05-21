import {StackScreenProps} from '@react-navigation/stack';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {Alert, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigation/StackNavigator';
import React, {useState} from 'react';
import {authCode} from '../../../actions/auth/auth';

interface Props extends StackScreenProps<RootStackParams, 'SignupChallenge'> {}

export const SignupChallenge = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleCode = async () => {
    try {
      const result = await authCode(email, code);

      if (result && result.correcto) {
        Alert.alert('Usuario creado exitosamente');
        navigation.navigate('LoginScreen');
      } else if (result && result.error) {
        Alert.alert(result.error);
      } else {
        Alert.alert('Error en la respuesta del servidor');
      }
    } catch (error) {
      // Manejo de errores
      console.error('Error en handleSignup: ', error);
    }
  };

  return (
    <Layout
      style={{
        flex: 1,
      }}>
      {/* Layout Principal */}
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Verificación</Text>
          <Text category="p2">
            Ingresa el código de verificacion que enviamos a tu correo
          </Text>
        </Layout>

        {/*  Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Tu correo 🐶"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginBottom: 10}}
            value={email}
            onChangeText={setEmail}
          />
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Código"
            keyboardType="numeric"
            autoCapitalize="none"
            style={{marginBottom: 10}}
            value={code}
            onChangeText={setCode}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 20}} />

        {/* Buttons */}
        <Layout>
          <Button
            onPress={() => {
              handleCode();
            }}
            status="primary">
            Verificar
          </Button>
        </Layout>

        {/*  Account info */}
        <Layout style={{height: 50}} />
      </ScrollView>
    </Layout>
  );
};
