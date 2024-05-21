import {StackScreenProps} from '@react-navigation/stack';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {Image, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigation/StackNavigator';
import {MyIcon} from '../../components/icons/MyIcon';
import {authLogin} from '../../../actions/auth/auth';
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {storeData, getStoreData} from '../../../actions/data/getdata';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const Login = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loged, setLog] = useState(false);

  useEffect(() => {
    const checkLoggedStatus = async () => {
      const logged = await getStoreData('Usuariologed');
      setLog(logged === 'true');
    };
    checkLoggedStatus();
  }, []);

  // useEffect(() => {
  //   if (loged) {
  //     navigation.reset({
  //       routes: [{name: 'BottomNavigator'}],
  //     });
  //   }
  // }, [loged, navigation]);

  const handleLogin = async () => {
    try {
      const result = await authLogin(email, password);

      if (result && result.correcto) {
        const results = result.results;
        storeData('Usuariologed', 'true');
        storeData('idUsuario', `${results.id}`);
        setLog(true);
        navigation.navigate('BottomNavigator');
      } else {
        Alert.alert(result?.error || 'An error occurred');
        setLog(false);
      }
    } catch (error) {
      // Manejo de errores
      console.error('Error en handleLogin: ', error);
    }
  };

  return (
    <Layout
      style={{
        flex: 1,
      }}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />
      {/* Layout Principal */}
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor ingrese para continuar</Text>
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
          <Input
            placeholder="Tu contraseña 😸"
            secureTextEntry
            autoCapitalize="none"
            style={{marginBottom: 10}}
            value={password}
            onChangeText={setPassword}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 20}} />

        {/* Buttons */}
        <Layout>
          <Button
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}
            onPress={() => {
              handleLogin();
              /*navigation.navigate('BottomNavigator');*/
            }}
            status="primary">
            Ingresar
          </Button>
        </Layout>

        {/*  Account info */}
        <Layout style={{height: 50}} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text onPress={() => {}}>¿No tienes cuenta?</Text>
          <Text
            style={{marginLeft: 5}}
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}
            status="info"
            category="s1">
            Crea una 🐦
          </Text>
        </Layout>
        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text onPress={() => {}}>¿Olvidaste tu contraseña?</Text>
          <Text
            style={{marginLeft: 5}}
            onPress={() => {
              navigation.navigate('PasswordLostScreen');
            }}
            status="info"
            category="s1">
            Recupérala ✨
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
