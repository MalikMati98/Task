import {StyleSheet, Text, View, Image} from 'react-native';
import React, {FC} from 'react';
import {Color} from '../../../../const';
import {_Icon} from '../../../../components';
import FastImage from 'react-native-fast-image';
import {Fonts} from '../../../../const/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
interface MovieListInterface {
  title: string;
  backgroundPic: string;
  id: number;
}

const MovieList: FC<MovieListInterface> = ({title, backgroundPic, id}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const goToDetails = () => {
    navigation.navigate('movie-details', {movie_id: id});
  };
  return (
    <TouchableOpacity onPress={goToDetails} style={styles.container}>
      <Image source={{uri: backgroundPic}} style={styles.img} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>Fantasy</Text>
      </View>

      <_Icon
        family="MaterialCommunityIcons"
        name="dots-horizontal"
        size={24}
        color={Color.Secondary}
      />
    </TouchableOpacity>
  );
};

export {MovieList};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Gray + 30,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  img: {
    width: '45%',
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  detailContainer: {
    justifyContent: 'flex-start',
    width: '45%',
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: Fonts.regular,
  },
  category: {
    fontSize: 13,
    fontFamily: Fonts.regular,
    color: Color.TextLight,
    marginTop: 5,
  },
});
