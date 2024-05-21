import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {StatusBar, useColorScheme} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {colors, myThemeLight} from './config/theme/theme';
import {StackNavigator} from './front/navigation/StackNavigator';

export const App = () => {
  const colorScheme = useColorScheme();
  const theme = myThemeLight;
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer
          theme={{
            dark: colorScheme === 'dark',
            colors: {
              primary: colors.primary,
              background: colors.primary,
              card: colors.backgroundLight,
              text: colors.black,
              border: colors.white,
              notification: colors.white,
            },
          }}>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
