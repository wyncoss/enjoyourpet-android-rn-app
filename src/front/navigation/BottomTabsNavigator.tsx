import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../config/theme/theme';
import {Text} from 'react-native-svg';
import {Mascotas} from '../pages/adoption/Mascotas';
import {Profile} from '../pages/profile/Profile';
import {Shop} from '../pages/shop/Shop';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from './StackNavigator';
import {MyIcon} from '../../../src2/front/components/icons/MyIcon';
import {IonIcon} from '../components/icons/IonIcon';

interface Props extends StackScreenProps<RootStackParams, 'BottomNavigator'> {}

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = ({navigation}: Props) => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.background,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.background,
          elevation: 0,
        },

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
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'heart' : 'heart-outline'}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
        component={Mascotas}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tienda',
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'bag-handle' : 'bag-handle-outline'}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
          // <IonIcon name="settings-outline" size={20} />,
        }}
        component={Shop}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Perfil',
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'person' : 'person-outline'}
              color={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
