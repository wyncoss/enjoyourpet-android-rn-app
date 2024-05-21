import {StackScreenProps} from '@react-navigation/stack';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const Register = ({navigation}: Props) => {
  const {height} = useWindowDimensions();

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
          <Input placeholder="Tu nombre 🐰" style={{marginBottom: 10}} />
          <Input
            placeholder="Tu correo 🐶"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Tu contraseña 😸"
            secureTextEntry
            autoCapitalize="none"
            style={{marginBottom: 10}}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 20}} />

        {/* Buttons */}
        <Layout>
          <Button
            onPress={() => {
              navigation.navigate('SignupChallenge');
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
