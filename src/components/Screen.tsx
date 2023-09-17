import {AlignmentProps, SpacingProps} from 'global-styles';

import React from 'react';
import {Platform, StatusBar, StyleSheet, ViewProps} from 'react-native';
import {_View} from 'components';
import {SafeAreaView} from 'react-native';

interface OwnProps {
  background?: JSX.Element;
  header?: JSX.Element;
  disableAndroidBack?: boolean;
  footer?: JSX.Element;
  hideTopSafeArea?: boolean;
  hideBottomSafeArea?: boolean;
  bottomSafeAreaColor?: string;
  topSafeAreaColor?: string;
  statusBarType?: 'default' | 'light-content' | 'dark-content';
  pageGuard?: {
    enabled: boolean;
    hideBlur?: boolean;
    title?: string;
    description?: string;
    onConfirm?: () => void;
  };
  onAndroidBack?: () => boolean | null | undefined;
}
type Props = OwnProps & SpacingProps & AlignmentProps & ViewProps;

export const _Screen: React.FC<Props> = ({
  align,
  background,
  justify,
  children,
  margins,
  paddings,
  disableAndroidBack,
  footer,
  hideBottomSafeArea,
  hideTopSafeArea,
  bottomSafeAreaColor,
  topSafeAreaColor,
  header,
  style,
  statusBarType = 'dark-content',
  pageGuard,
  onAndroidBack,
  ...rest
}) => {
  return (
    <>
      {background && <_View style={styles.container}>{background}</_View>}
      {hideTopSafeArea && (
        <SafeAreaView style={{backgroundColor: topSafeAreaColor}} />
      )}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={statusBarType}
      />
      <_View
        align={align}
        justify={justify}
        margins={margins}
        paddings={{
          ...paddings,
          paddingTop:
            Platform.OS === 'android'
              ? StatusBar.currentHeight || 24
              : paddings?.paddingTop,
        }}
        flex={1}
        style={[style]}
        {...rest}>
        {header}
        {children}
      </_View>
      {footer}
      {hideBottomSafeArea && (
        <SafeAreaView
          style={{backgroundColor: bottomSafeAreaColor}}
          edges={['bottom']}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});
