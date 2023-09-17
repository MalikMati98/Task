import React, {FC} from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {Background, _Screen, _Text, _View, _Icon} from '../../../components';
import {Color} from '../../../const';
import {Fonts} from '../../../const/theme';

const Header = () => {
  return (
    <_View style={styles.headerContainer}>
      <_Icon
        family={'MaterialIcons'}
        name={'chevron-left'}
        size={35}
        color={Color.black}
      />
      <_View style={styles.titleContainer}>
        <_Text style={styles.movieName}>The King's Man</_Text>
        <_Text style={styles.titleDetail}>In Theaters December 22, 2021</_Text>
      </_View>
    </_View>
  );
};

interface RengerTagsInterface {
  iconColor: string;
  text?: string;
}

const RenderOptions: FC<RengerTagsInterface> = ({iconColor, text}) => {
  return (
    <_View
      style={{
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <_Icon
        family="MaterialIcons"
        name="video-label"
        size={20}
        color={iconColor}
      />
      <_Text style={{fontSize: 14, color: Color.Gray, marginLeft: 5}}>
        {text}
      </_Text>
    </_View>
  );
};

export const SeatSelection: FC = () => {
  const nameTags = ['Selected', 'Not available', 'VIP(150$)', 'Regular(50$)'];
  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      <Header />
      <_View style={styles.subContainer}>
        <Image
          source={require('../../../assets/images/seat.png')}
          resizeMode={'cover'}
          style={{width: '100%', height: 350}}
        />
        <_View style={styles.optionsContainer}>
          {nameTags.map((item: string, index: number) => {
            return (
              <RenderOptions
                iconColor={
                  index == 0
                    ? Color.DangerLight
                    : index === 1
                    ? Color.Gray
                    : index === 2
                    ? 'purple'
                    : Color.Secondary
                }
                text={item}
              />
            );
          })}
        </_View>
        <_View style={styles.rowTagContainer}>
          <_Text>
            4<_Text style={{fontSize: 12}}>/3 row</_Text>
          </_Text>
          <_Icon
            family="MaterialIcons"
            name="close"
            size={18}
            color={Color.black}
          />
        </_View>

        <_View style={styles.btnContainer}>
          <_View
            style={{
              width: '35%',
              paddingVertical: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: Color.Gray + 30,
            }}>
            <_Text style={{fontSize: 11, fontFamily: Fonts.regular}}>
              Total Price
            </_Text>
            <_Text style={{fontSize: 15, fontFamily: Fonts.bold}}>$ 50</_Text>
          </_View>
          <Pressable
            style={{
              width: '55%',
              backgroundColor: Color.Secondary,
              paddingVertical: 15,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <_Text
              style={{
                fontSize: 15,
                color: Color.White,
                fontFamily: Fonts.bold,
              }}>
              Process to Pay
            </_Text>
          </Pressable>
        </_View>
      </_View>
    </_Screen>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    backgroundColor: Color.White,
    width: '100%',
    paddingTop: 50,
  },
  headerContainer: {
    paddingTop: 10,
    flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: Color.White,
  },
  titleContainer: {
    width: '90%',
    alignItems: 'center',
  },
  movieName: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  titleDetail: {
    fontSize: 13,
    color: Color.Secondary,
  },
  optionsContainer: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 20,
  },
  rowTagContainer: {
    width: 100,
    height: 30,
    backgroundColor: Color.Gray + 30,
    marginLeft: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
