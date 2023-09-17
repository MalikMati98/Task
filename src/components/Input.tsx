import {Spacing} from 'const';
import {Fonts} from 'const/theme';
import {_View, _Icon} from 'components';
import React from 'react';
import {StyleSheet, TextInput, TextInputProps, TextStyle} from 'react-native';
import {Color} from 'const';
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();

interface IconProps {
  iconFamily?: string;
  iconName?: any;
  iconSize?: number;
  iconcolor?: string;
  iconStyle?: any;
}

type Props = IconProps & TextInputProps;
export const Input = React.forwardRef<TextInput, Props>(function Input(
  {
    style,
    iconFamily,
    iconName,
    iconSize = 15,
    iconcolor = Color.Primary,
    iconStyle,
    ...rest
  },
  ref,
) {
  return (
    <_View>
      {iconName && (
        <_Icon
          style={[iconStyle, styles.icon, {left: isTablet ? 60 : 40}]}
          name={iconName}
          family={iconFamily}
          color={iconcolor}
          size={iconSize}
        />
      )}
      <TextInput
        ref={ref}
        {...rest}
        style={[
          rest.multiline ? styles.multiline : styles.standard,
          style,
          {paddingLeft: iconName ? 50 : 20},
        ]}
      />
    </_View>
  );
});

const core: TextStyle = {
  fontSize: 14,
  borderRadius: 10,
  alignItems: 'center',
  fontFamily: Fonts.regular,
  marginBottom: Spacing.Med,
  paddingHorizontal: Spacing.Med,
  textAlignVertical: 'center',
  alignSelf: 'center',
};

const styles = StyleSheet.create({
  standard: {
    ...core,
    minHeight: 50,
    alignSelf: 'center',
  },
  multiline: {
    ...core,
    minHeight: 100,
    maxHeight: 150,
    height: 'auto',
    paddingVertical: Spacing.Med,
    textAlignVertical: 'top',
  },
  icon: {
    postition: 'absolute',
    left: 40,
    top: 32,
    zIndex: 1,
    width: 30,
  },
  rightIcon: {
    postition: 'absolute',
    left: 50,
    top: 16,
    zIndex: 1,
  },
});
