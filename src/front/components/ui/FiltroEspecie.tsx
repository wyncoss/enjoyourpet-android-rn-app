import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; //iconos
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors} from '../../../config/theme/theme';

export const Especie = ({title, icon, isActive, filtrarPorEspecie}: any) => {
  return (
    <TouchableOpacity onPress={() => filtrarPorEspecie(title)}>
      <View style={styles.op_container}>
        <View
          style={[
            styles.circle,
            // isActive
            //   ? {backgroundColor: colors.primary}
            //   : {backgroundColor: '#cdcdcd'},
          ]}>
          <Icon
            style={{padding: 20, fontSize: 25, marginHorizontal: 'auto'}}
            name={icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const dataEspecie = [
  {
    id: '1',
    icon: 'cat', //icono gato
    title: 'Gato',
    isActive: false,
  },
  {
    id: '2',
    icon: 'paw', //icono huella
    title: 'Todo',
    isActive: false,
  },
  {
    id: '3',
    icon: 'dog', //icono perro
    title: 'Perro',
    isActive: false,
  },
];

export const FiltroEspecie = ({filtrarPorEspecie}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionEspecie}>
        <FlatList
          data={dataEspecie}
          horizontal
          renderItem={({item}) => (
            <Especie
              isActive={item.isActive}
              title={item.title}
              icon={item.icon}
              filtrarPorEspecie={filtrarPorEspecie}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  op_container: {
    width: '100%',
    alignItems: 'center',
    height: 110,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '500',
  },
  circle: {
    width: 150,
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  sectionEspecie: {
    flexDirection: 'row',
    marginTop: 45,
    marginBottom: 10,
    width: '100%',
  },
});
