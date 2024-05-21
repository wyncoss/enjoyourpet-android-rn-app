import {StackScreenProps} from '@react-navigation/stack';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigation/StackNavigator';
import {authSignup} from '../../../actions/auth/auth';
import {Alert} from 'react-native';

import React, {useState} from 'react';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const Register = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_, setpassword_] = useState('');

  const handleSignup = async () => {
    if (password.length < 8) {
      Alert.alert('Tu contraseña debe tener ocho caracteres o más');
      return;
    }

    if (password !== password_) {
      Alert.alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const result = await authSignup(name, email, password);

      if (result && result.correcto) {
        navigation.navigate('SignupChallenge');
      } else if (result && result.error) {
        Alert.alert(result.error);
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
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Crea tu cuenta, iniciemos esta aventura</Text>
        </Layout>

        {/*  Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Tu nombre 🐰"
            autoCapitalize="none"
            style={{marginBottom: 10}}
            onChangeText={setName}
          />
          <Input
            placeholder="Tu correo 🐶"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginBottom: 10}}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Tu contraseña 😸"
            secureTextEntry
            autoCapitalize="none"
            style={{marginBottom: 10}}
            onChangeText={setPassword}
          />
          <Input
            placeholder="Confirma tu contraseña 😸"
            secureTextEntry
            autoCapitalize="none"
            style={{marginBottom: 10}}
            onChangeText={setpassword_}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 20}} />

        {/* Buttons */}
        <Layout>
          <Button
            onPress={() => {
              handleSignup();
            }}
            status="primary">
            Regístrate
          </Button>
        </Layout>

        {/*  Account info */}
        <Layout style={{height: 50}} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text onPress={() => {}}>¿Ya tienes una cuenta?</Text>
          <Text
            style={{marginLeft: 5}}
            onPress={() => {
              navigation.pop();
            }}
            status="info"
            category="s1">
            Ingresa 🐦
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
