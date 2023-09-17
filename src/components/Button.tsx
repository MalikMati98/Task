import {SpacingProps} from '../global-styles';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {_Image, _Text, _Icon} from '../components';
import {Color, Spacing} from '../const';

interface OwnProps extends TouchableOpacityProps {
  title: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  showArrowBefore?: boolean;
  showArrowAfter?: boolean;
  iconFamily?: string;
  iconName?: string;
  iconColor?: string;
}

type Props = OwnProps & SpacingProps;

export const _Button: React.FC<Props> = ({
  title,
  style,
  disabled,
  margins,
  paddings,
  loading,
  type = 'primary',
  showArrowBefore,
  showArrowAfter,
  iconFamily,
  iconName,
  iconColor,
  ...rest
}) => {
  const disabledType = `${type}Disabled` as keyof typeof styles;
  const disabledTextType = `${type}TextDisabled` as keyof typeof styles;
  const textType = `${type}Text` as keyof typeof styles;
  const disabledStyle = JSON.parse(JSON.stringify(styles[disabledType]));
  const textStyle = JSON.parse(JSON.stringify(styles[textType]));
  const disabledTextStyle = JSON.parse(
    JSON.stringify(styles[disabledTextType]),
  );

  if (loading) {
    return (
      <ActivityIndicator
        size="small"
        color={Color.Primary}
        style={{...styles.loading, ...margins, ...paddings}}
      />
    );
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={[
          styles.base,
          styles[type],
          margins,
          paddings,
          style,
          disabled && disabledStyle,
        ]}
        disabled={disabled}
        {...rest}>
        {iconName && (
          <_Icon
            family={iconFamily}
            name={iconName}
            style={{marginRight: 10}}
            color={iconColor}
          />
        )}
        <_Text
          size="base"
          font="Poppins-Bold"
          style={[textStyle, disabled && disabledTextStyle]}>
          {title}
        </_Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: Spacing.Med,
    minWidth: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: Color.Secondary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  primaryText: {
    color: Color.Negative,
  },
  primaryDisabled: {
    backgroundColor: Color.Secondary,
    borderColor: Color.Secondary,
  },
  primaryTextDisabled: {
    color: Color.Negative,
  },
  secondary: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.Secondary,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  secondaryText: {
    color: Color.White,
  },
  secondaryDisabled: {},
  secondaryTextDisabled: {
    color: Color.Secondary,
  },
  tertiary: {
    borderColor: Color.TextLight,
    backgroundColor: 'transparent',
    color: Color.Primary,
  },
  tertiaryText: {
    color: Color.Primary,
  },
  tertiaryDisabled: {},
  tertiaryTextDisabled: {
    color: Color.Secondary,
  },
  disabledImage: {
    opacity: 0.2,
  },
  loading: {
    alignSelf: 'center',
    height: 40,
  },
  arrowRotated: {
    transform: [{rotate: '180deg'}],
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
  },
});
