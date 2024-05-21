import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors, styles} from '../../../config/theme/theme';
import {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {IonIcon} from '../../components/icons/IonIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props extends StackScreenProps<RootStackParams, 'BottomNavigator'> {}

export const Profile = ({navigation}: Props) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(true);

  const logout = () => {
    Alert.alert('Cerrar sesión', 'Estás seguro que deseas salir?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Continuar',
        onPress: () => {
          {
            navigation.navigate('LoginScreen');
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={{width: '100%'}}>
          <Image
            source={require('../../assets/img/profile-card.jpg')}
            style={styles.cover}
          />
        </View>
        <View style={profile.profileContainer}>
          <Image
            source={require('../../assets/img/avatar.jpg')}
            style={profile.profile}
          />
          {/* <Text style={profile.name}>
            {userLogin === true
              ? userData.name
              : 'Por favor ingresa a tu cuenta'}
          </Text> */}
          {userLogin === false ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              <View style={profile.loginBtn}>
                <Text style={profile.menuText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={profile.loginBtn}></View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={profile.menuWrapper}>
              <TouchableOpacity onPress={() => {}}>
                <View style={profile.menuItem}>
                  <IonIcon name="settings-outline" color={colors.primary} />
                  <Text style={profile.menuText}>Editar perfil</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <View style={profile.menuItem}>
                  <IonIcon name="paw-outline" color={colors.primary} />
                  <Text style={profile.menuText}>Editar perfil mascota</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <View style={profile.menuItem}>
                  <IonIcon name="cart-outline" color={colors.primary} />
                  <Text style={profile.menuText}>Pedidos</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <View style={profile.menuItem}>
                  <IonIcon name="diamond-outline" color={colors.primary} />
                  <Text style={profile.menuText}>Solicitar vender</Text>
                </View>
              </TouchableOpacity>

              <View style={{height: 150}} />

              <TouchableOpacity onPress={() => {}}>
                <View style={profile.menuItem}>
                  <IonIcon
                    name="chatbox-ellipses-outline"
                    color={colors.primary}
                  />
                  <Text style={profile.menuText}>Asistencia</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  logout();
                }}>
                <View style={profile.menuItem}>
                  <IonIcon name="log-out-outline" color={colors.primary} />
                  <Text style={profile.menuText}>Cerrar Sesión</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const profile = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 100,
    borderColor: colors.primary,
    resizeMode: 'cover',
    marginTop: -90,
  },
  name: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  loginBtn: {
    backgroundColor: colors.primary,
    padding: 2,
    borderWidth: 0.4,
    borderColor: colors.secondary,
    borderRadius: 100,
  },
  menuText: {
    color: colors.gray,
    marginHorizontal: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
  menuWrapper: {
    marginTop: 25,
    width: '100%',
    backgroundColor: colors.background,
    borderRadius: 12,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});
