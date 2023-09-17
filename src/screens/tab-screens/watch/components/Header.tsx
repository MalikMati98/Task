import React, {FC, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {_Text, _Icon, _View} from '../../../../components';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';
interface HeaderPropsInteface {
  handleSearch: () => void;
}

const Header: FC<HeaderPropsInteface> = ({handleSearch}) => {
  return (
    <_View
      paddings={{paddingHorizontal: 20, paddingVertical: 10}}
      style={styles.headerContainer}>
      <_Text color={Color.Primary} size={'lrg'} font={Fonts.regular}>
        Watch
      </_Text>
      <Pressable onPress={handleSearch}>
        <_Icon
          family="MaterialIcons"
          name="search"
          size={20}
          color={Color.black}
        />
      </Pressable>
    </_View>
  );
};

export {Header};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
