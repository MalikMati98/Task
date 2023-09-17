import React, {FC, useEffect, useState} from 'react';
import {Background, _Screen, _Text, _View, _Icon} from '../../../components';
import {Color} from '../../../const';
import {Tags, TopHeader} from './components';
import {Pressable, StyleSheet} from 'react-native';
import {ApiEndPoints, Get} from '../../../services';

interface Props {
  navigation: any;
  route: any;
}

export const MoveDetails: FC<Props> = ({navigation, route}) => {
  const {movie_id} = route?.params;
  const [movieImage, SetMovieImage] = useState<string | undefined>();
  const [movieTagLine, SetMovieTagLine] = useState<string | undefined>();
  const [movieOverview, setMovieOverview] = useState<string | undefined>();
  const [geners, setGeners] = useState<[]>();
  const fetchData = () => {
    let URL = ApiEndPoints.movieDetails + movie_id;
    Get(URL).then((res: any) => {
      if (res) {
        SetMovieImage(res.backdrop_path);
        setGeners(res?.genres);
        setMovieOverview(res?.overview);
        SetMovieTagLine(res?.tagline);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const text =
    "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them. Discover the origins of the very first independent intelligence agency in The King's Man. The Comic Book “The Secret Service” by Mark Millar and Dave Gibbons.";
  return (
    <_Screen background={<Background color={Color.Negative} />}>
      <TopHeader id={movie_id} tagLine={movieTagLine} movieImage={movieImage} />
      <_View paddings={{padding: 40}}>
        <_Text
          margins={{marginTop: 20, marginBottom: 20}}
          color={Color.TextDark}
          size={'sml'}
          font={'Poppins-Bold'}
          style={{fontWeight: '500'}}>
          Geners
        </_Text>
        {geners && <Tags data={geners} />}
        <_View height={1} backgroundColor={Color.Gray} />
        <_Text
          margins={{marginTop: 10}}
          color={Color.TextDark}
          size={'med'}
          font={'Poppins-Bold'}
          style={{fontWeight: '400'}}>
          Overview
        </_Text>
        <_Text color={Color.TextLight} size={'xsml'} font={'Poppins-Regular'}>
          {movieOverview}
        </_Text>
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
