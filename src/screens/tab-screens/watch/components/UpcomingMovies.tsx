import React, {FC} from 'react';
import {ImageBackground, Pressable, StyleSheet} from 'react-native';
import {_Text, _View} from '../../../../components';
import {Color, Fonts} from '../../../../const/theme';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

interface UpcomingMoviesInterface {
  id: number;
  title: string;
  backgroundPic: string;
}

const UpcomingMovies: FC<UpcomingMoviesInterface> = ({
  id,
  title,
  backgroundPic,
}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const goToDetails = () => {
    navigation.navigate('movie-details', {movie_id: id});
  };
  console.log('backgroundPic',backgroundPic);
  
  return (
    <Pressable onPress={goToDetails}>
      <_View
        justify="center"
        align="center"
        width={'96%'}
        margins={{marginHorizontal: 10, marginTop: 10}}>
        <ImageBackground
          imageStyle={styles.imageStyle}
          source={{uri: backgroundPic}}
          style={styles.img}
          resizeMode='cover'>
          <_View style={styles.overlay}>
            <_Text color={Color.White} size={'med'} font={Fonts.regular}>
              {title}
            </_Text>
          </_View>
        </ImageBackground>
      </_View>
    </Pressable>
  );
};

export {UpcomingMovies};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },

  img: {
    width: 375,
    height: 180,
    marginHorizontal: 10,
  },
  overlay: {
    borderRadius: 20,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingLeft: 10,
  },
});
