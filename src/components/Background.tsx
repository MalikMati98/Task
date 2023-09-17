import {_View} from '../components';
import {Color} from '../const';
import React from 'react';

interface Props {
  color: Color | string;
}

export const Background: React.FC<Props> = ({color}) => (
  <_View flex={1} style={{backgroundColor: Color.PrimaryLight}} />
);
