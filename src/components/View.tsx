import { AlignmentProps, SizeProps, SpacingProps } from 'global-styles';
import React from 'react';
import { View, ViewProps } from 'react-native';

type Props = AlignmentProps & SpacingProps & SizeProps & ViewProps;

export const _View: React.FC<Props> = ({
    children,
    margins,
    paddings,
    align,
    justify,
    flex,
    maxHeight,
    maxWidth,
    height,
    width,
    minHeight,
    minWidth,
    style,
    ...rest
}) => (
    <View
        style={[
            margins,
            paddings,
            align && { alignItems: align },
            justify && { justifyContent: justify },
            flex ? { flex } : undefined,
            maxHeight ? { maxHeight } : undefined,
            maxWidth ? { maxWidth } : undefined,
            minHeight ? { minHeight } : undefined,
            minWidth ? { minWidth } : undefined,
            height ? { height } : undefined,
            width ? { width } : undefined,
            style,
        ]}
        {...rest}
    >
        {children}
    </View>
);
