import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';

interface Props {
  name: string;
  color?: string;
  white?: boolean;
}

export const MyIcon = ({name, color, white = false}: Props) => {
  const theme = useTheme();
  if (white) {
    color = theme['color-info-100'];
  } else if (!color) {
    color = theme['text-basic-color'];
  } else {
    color = theme[color] ?? theme['text-basic-color'];
  }

  return <Icon style={styles.icon} fill={color} name={name} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
