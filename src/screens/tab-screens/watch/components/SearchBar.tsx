import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {Color} from '../../../../const';
import {_Text, _Icon, _View} from '../../../../components';
import {Fonts} from '../../../../const/theme';

interface SearchBarInterface {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  handleCloseSearch: () => void;
}

const SearchBar: FC<SearchBarInterface> = ({
  searchQuery,
  setSearchQuery,
  handleCloseSearch,
}) => {
  return (
    <_View
      paddings={{paddingHorizontal: 30, paddingVertical: 5}}
      style={styles.container}>
      <_View style={styles.subContainer}>
        <_Icon family="Octicons" name="search" size={15} color={Color.black} />
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="TV shows, movies and more"
          style={styles.textInput}
        />
      </_View>
      <Pressable onPress={handleCloseSearch}>
        <_Icon family="EvilIcons" name="close" size={25} color={Color.black} />
      </Pressable>
    </_View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: Color.TextLight + 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    height: '100%',
    width: '90%',
    marginLeft: 5,
    fontFamily: Fonts.regular,
  },
});
