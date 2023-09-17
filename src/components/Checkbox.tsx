import {_Text, _View} from '../components';
import {Color, Spacing} from '../const';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  checked: boolean;
  onToggle: () => void;
  text?: string | JSX.Element;
}

export const _Checkbox: React.FC<Props> = ({checked, text, onToggle}) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <_View
        flex={1}
        flexDirection="row"
        margins={{marginVertical: Spacing.Med}}>
        <_View
          height={16}
          width={16}
          margins={{marginRight: Spacing.Med}}
          style={[styles.box, checked && styles.boxChecked]}>
          {checked && (
            <_Text align="center" color={Color.Negative}>
              &#x2713;
            </_Text>
          )}
        </_View>
      </_View>
      {text && (
        <_Text
          size="tny"
          style={{justifyContent: 'center', alignItems: 'center'}}
          margins={styles.margin}>
          {text}
        </_Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Color.Primary,
    backgroundColor: Color.PrimaryLight,
  },
  boxChecked: {
    borderWidth: 0,
    backgroundColor: Color.Primary,
  },
  margin: {marginTop: -16, marginLeft: 30},
});
