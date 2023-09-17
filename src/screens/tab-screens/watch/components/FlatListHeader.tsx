import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';

interface FlatlistHeaderInterface {
  isSearchEnabled: boolean;
  searchQuery: string;
  numberOfResult: number;
}

export const FlatlistHeader: FC<FlatlistHeaderInterface> = ({
  isSearchEnabled,
  searchQuery,
  numberOfResult,
}) => {
  return isSearchEnabled && searchQuery.length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Top Results
        {searchQuery.length > 1 && (
          <Text style={styles.txt}>{`\t${numberOfResult} Found`}</Text>
        )}
      </Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    borderBlockColor: Color.black,
    backgroundColor: Color.Gray + 30,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  txt: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
});
