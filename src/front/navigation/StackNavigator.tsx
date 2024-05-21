import {
  createStackNavigator,
  StackCardInterpolatedStyle,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import {Login} from '../pages/auth/Login';
import {PasswordLost} from '../pages/auth/PasswordLost';
import {Register} from '../pages/auth/Register';
import {PasswordLostChallenge} from '../pages/auth/PasswordLostChallenge';
import {NewPasswordChallenge} from '../pages/auth/NewPasswordChallenge';
import {SignupChallenge} from '../pages/auth/SignupChallenge';
import {Mascotas} from '../pages/adoption/Mascotas';
import {BottomTabsNavigator} from './BottomTabsNavigator';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  PasswordLostScreen: undefined;
  PasswordLostScreenChallenge: undefined;
  NewPasswordChallenge: undefined;
  SignupChallenge: undefined;
  BottomNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: fadeAnimation,
      }}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="SignupChallenge" component={SignupChallenge} />
      <Stack.Screen name="PasswordLostScreen" component={PasswordLost} />
      <Stack.Screen
        name="PasswordLostScreenChallenge"
        component={PasswordLostChallenge}
      />
      <Stack.Screen
        name="NewPasswordChallenge"
        component={NewPasswordChallenge}
      />
      <Stack.Screen name="BottomNavigator" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
};
