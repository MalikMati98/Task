import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {_Text, _View} from '../../../../components';
import {Color} from '../../../../const';
import {Fonts} from '../../../../const/theme';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  data: any[];
}
const tagColor: any = {
  [0]: '#7396C9',
  [1]: '#56CCC9',
  [2]: '#594fa5',
  [3]: '#d0a31e',
  [4]: '#45C3F4',
  [5]: '#94DDCF',
  [6]: '#63A7B7',
};
export const Tags: FC<Props> = ({data}) => {
  return (
    <_View style={{flexDirection: 'row', with: '100%'}}>
      {data.map((gener: any, index: number) => {
        return (
          <_View style={{...styles.tag, backgroundColor: tagColor[index]}}>
            <_Text color={Color.White} size={'tny'} font={Fonts.bold}>
              {gener?.name}
            </_Text>
          </_View>
        );
      })}
    </_View>
  );
};
const styles = StyleSheet.create({
  tag: {
    height: 24,
    borderRadius: 16,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    marginVertical: 10,
  },
});
