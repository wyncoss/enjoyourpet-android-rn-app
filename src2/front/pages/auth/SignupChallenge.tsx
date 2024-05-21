import {StackScreenProps} from '@react-navigation/stack';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'SignupChallenge'> {}

export const SignupChallenge = ({navigation}: Props) => {
  const {height} = useWindowDimensions();

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
            placeholder="Código"
            keyboardType="numeric"
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
              navigation.navigate('LoginScreen');
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
