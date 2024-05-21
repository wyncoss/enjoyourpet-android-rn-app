import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../config/theme/theme';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export const IonIcon = ({
  name,
  size = 24,
  color = colors.backgroundLight,
}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
