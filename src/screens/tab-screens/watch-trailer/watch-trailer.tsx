import React, {FC, useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Background, _Screen} from '../../../components';
import {Color} from '../../../const';
import {ApiEndPoints, Get} from '../../../services';
import {VideoPlayer} from './VideoPlayer';
interface Props {
  navigation: any;
  route: any;
}
export const WatchTrailer: FC<Props> = ({navigation, route}) => {
  const {movie_id} = route?.params;
  const [list, setList] = useState<any>([]);

  const fetchData = () => {
    let URL = ApiEndPoints.getVideo + movie_id + '/videos';
    Get(URL).then((res: any) => {
      if (res) {
        const {results} = res;
        getYouTubeList(results);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getYouTubeList = async (res: any) => {
    const list = await res.map((item: any) => {
      return item.key;
    });
    setList(list);
  };
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      {list && <VideoPlayer list={list} />}
    </_Screen>
  );
};

const styles = StyleSheet.create({
  mediaPlayer: {
    backgroundColor: Color.black,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
});
