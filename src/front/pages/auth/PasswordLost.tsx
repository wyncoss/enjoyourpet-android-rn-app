import {StackScreenProps} from '@react-navigation/stack';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {Alert, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigation/StackNavigator';
import {MyIcon} from '../../components/icons/MyIcon';
import React, {useState} from 'react';
import {authRestartPassword} from '../../../actions/auth/auth';

interface Props
  extends StackScreenProps<RootStackParams, 'PasswordLostScreen'> {}

export const PasswordLost = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  const [email, setEmail] = useState('');

  const handlerLostPassword = async () => {
    if (email.length <= 1) {
      Alert.alert('Por favor ingresa un correo valido');
      return;
    }
    try {
      const result = await authRestartPassword(email);

      if (result && result.correcto) {
        navigation.navigate('PasswordLostScreenChallenge');
      } else {
        Alert.alert(result?.error || '');
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
          <Text category="p2">Ingresa tu correo, te enviaremos un código</Text>
        </Layout>

        {/*  Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="micorreo@correo.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginBottom: 10}}
            onChangeText={setEmail}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 20}} />

        {/* Buttons */}
        <Layout>
          <Button
            onPress={() => {
              handlerLostPassword();
            }}
            status="primary">
            Envíame un código
          </Button>
        </Layout>

        {/*  Account info */}
        <Layout style={{height: 50}} />
      </ScrollView>
    </Layout>
  );
};
