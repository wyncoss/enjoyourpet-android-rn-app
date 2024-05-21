import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../config/theme/theme';
import {Text} from 'react-native-svg';
import {Mascotas} from '../pages/adoption/Mascotas';
import {Profile} from '../pages/profile/Profile';
import {Shop} from '../pages/shop/Shop';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from './StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'BottomNavigator'> {}

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = ({navigation}: Props) => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Descubre',
          tabBarIcon: () => <Text>Descubre</Text>,
        }}
        component={Mascotas}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tienda',
          tabBarIcon: () => <Text>Tienda</Text>,
          // <IonIcon name="settings-outline" size={20} />,
        }}
        component={Shop}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Perfil',
          tabBarIcon: () => <Text>Perfil</Text>,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
