import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

interface initialStateInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface main {
  response: {results: initialStateInterface};
}
let initialState: main[] = [];

const AppReducer = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    upComingMoviesList: (state: any, action: PayloadAction<main>) => {
      state = [action.payload.response.results];
    },

    revertStore: () => {
      initialState = [];
    },
  },
});

export const {upComingMoviesList, revertStore} = AppReducer.actions;

export const RootReducers = combineReducers({
  appSlice: AppReducer.reducer,
});
