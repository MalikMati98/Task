import {SpacingProps} from 'global-styles';
import React from 'react';
import {_View} from 'components';
import FastImage, {FastImageProps} from 'react-native-fast-image';

interface OwnProps extends FastImageProps {
  radius?: number;
  height?: any;
  width?: any;
  uri: any;
}

type Props = OwnProps & SpacingProps;

export const _Image: React.FC<Props> = ({
  height,
  width,
  radius,
  style,
  paddings,
  margins,
  uri,
  ...rest
}) => {
  console.log({uri});

  return (
    <_View
      align="center"
      justify="center"
      paddings={paddings}
      margins={margins}
      height={height}
      width={width}
      style={[{borderRadius: radius || 0}, style]}>
      <FastImage
        source={{
          uri: 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(rest as any)}
        style={[
          {borderRadius: radius || 0},
          height ? {height} : undefined,
          width ? {width} : undefined,
        ]}
      />
    </_View>
  );
};
