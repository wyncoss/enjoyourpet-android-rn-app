import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../config/theme/theme';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export const FontAwesomeIcon = ({
  name,
  size = 24,
  color = colors.backgroundLight,
}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
