import React, {useCallback, useState, useRef, FC} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {_Button} from '../../../components';
import YouTube from 'react-native-youtube-iframe';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
interface Props {
  list: any[];
}
const VideoPlayer: FC<Props> = ({list}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [playing, setPlaying] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState<number>(0);
  const goBack = () => {
    navigation.goBack();
  };
  const playerRef = useRef();

  const playNextVideo = () => {
    if (currentPlaying == list.length - 1) {
      goBack();
    } else {
      setCurrentPlaying(currentPlaying + 1);
    }
  };

  return (
    <View>
      <YouTube
        ref={playerRef}
        playList={list}
        height={300}
        fullscreen={true}
        allowsFullscreenVideo={true}
        play={true}
        onReady={() => {
          playerRef.current.fullscreen = true;
        }}
        onChangeState={(event: any) => {
          if (event === 'ended') {
            playNextVideo(); // Automatically play the next video in the playlist when the current video ends
          }
        }}
        onError={error => console.error('Error:', error)}
      />
      <_Button title={'Done'} onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {VideoPlayer};
// import React, {useEffect, useState} from 'react';
// import {Dimensions} from 'react-native';
// import {View} from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';

// const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// export const VideoPlayer = () => {
//   return (
//     // rotate by 90 deg for horizontal video
//     <View style={{transform: [{rotate: '90deg'}]}}>
//       <YoutubePlayer
//         videoId={'XSqi5s3rfqk'}
//         // video height -> screen width
//         height={SCREEN_WIDTH}
//         // video width -> screen height
//         width={SCREEN_HEIGHT}
//         // prevent aspect ratio auto sizing
//         webViewProps={{
//           injectedJavaScript: `
//             var element = document.getElementsByClassName('container')[0];
//             element.style.position = 'unset';
//             element.style.paddingBottom = 'unset';
//             true;
//           `,
//         }}
//       />
//     </View>
//   );
// };
