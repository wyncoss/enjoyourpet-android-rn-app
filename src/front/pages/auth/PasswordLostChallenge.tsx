import {StackScreenProps} from '@react-navigation/stack';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigation/StackNavigator';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {authUpdatePassword} from '../../../actions/auth/auth';

interface Props
  extends StackScreenProps<RootStackParams, 'PasswordLostScreenChallenge'> {}

export const PasswordLostChallenge = ({navigation}: Props) => {
  const {height} = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [password_, setPassword_] = useState('');

  const handleCode = async () => {
    if (password !== password_) {
      Alert.alert('Las contraseñas no coinsiden');
      return;
    }
    if (password.length < 8) {
      Alert.alert('La nueva contraseña debe tener almenos ocho caracteres');
      return;
    }
    try {
      const result = await authUpdatePassword(email, code, password);

      if (result && result.correcto) {
        Alert.alert('Tu contraseña se actualizo correctamente');
        navigation.navigate('LoginScreen');
      } else if (result && result.error) {
        Alert.alert(result.error);
      } else {
        Alert.alert('Error en la actualización de contraseña');
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
          {/* <Text category="h1">Acceso</Text> */}
          <Text category="p2">Ahora ingresa el código que te enviamos</Text>
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
            placeholder="Tu contraseña 😸"
            secureTextEntry
            autoCapitalize="none"
            style={{marginBottom: 10}}
            value={password}
            onChangeText={setPassword}
          />
        </Layout>
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Confirma tu contraseña 😸"
            secureTextEntry
            autoCapitalize="none"
            style={{marginBottom: 10}}
            value={password_}
            onChangeText={setPassword_}
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
