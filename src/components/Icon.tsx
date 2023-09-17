import React, {FC} from 'react';
import {Color} from '../const';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5ProIcon from 'react-native-vector-icons/FontAwesome5Pro';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Zocial from 'react-native-vector-icons/Zocial';
import Octicons from 'react-native-vector-icons/Octicons';

interface Props {
  family?: string;
  name: string;
  size?: number;
  color?: string;
  style?: any;
  onPress?: () => void;
}
export const _Icon: FC<Props> = ({
  family,
  name,
  size,
  color,
  style,
  onPress,
  ...props
}) => {
  switch (family) {
    case 'Octicons':
      return (
        <Octicons
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'Zocial':
      return (
        <Zocial
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'AntDesign':
      return (
        <AntDesignIcon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'Entypo':
      return (
        <EntypoIcon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIconsIcon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'Feather':
      return (
        <FeatherIcon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesomeIcon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5Icon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'FontAwesome5Pro':
      return (
        <FontAwesome5ProIcon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'Fontisto':
      return (
        <FontistoIcon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'Material':
    case 'MaterialIcons':
      return (
        <MaterialIcon
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          size={size || 16}
          color={color || Color.White}
          style={style}
          onPress={onPress}
          {...props}
        />
      );
    default:
      return (
        <Ionicons name={name} size={size || 16} color={color || Color.White} />
      );
  }
};
