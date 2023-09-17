import { useNavigation } from '@react-navigation/native';
import { SpacingProps } from 'global-styles';
import { Spacing } from 'const';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { _Image } from 'components'

type Props = TouchableOpacityProps & SpacingProps & { useCloseIcon?: boolean };

export const BackButton: React.FC<Props> = ({
  style,
  onPress,
  useCloseIcon,
}) => {
  const navigation = useNavigation();
  const caretSize = 20;
  // Spacing should be set to default screen padding size
  const containerWidth = Spacing.Lrg * 2 + caretSize;

  return (
    <TouchableOpacity
      onPress={onPress || navigation.goBack}
      style={[
        {
          height: 48,
          width: containerWidth,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
    >
      <_Image
        source={
          useCloseIcon
            ? require('assets/icons/iconClose.png')
            : require('assets/icons/iconBack.png')
        }
        height={caretSize}
        width={caretSize}
        resizeMode="center"
      />
    </TouchableOpacity>
  );
};
