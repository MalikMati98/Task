import React, {FC, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Background, _Screen} from '../../../components';
import {Color} from '../../../const';
import {upComingMoviesList} from '../../../redux/reducers';
import {ApiEndPoints, Get} from '../../../services';
import {Card, FlatlistHeader, Header, SearchBar} from './components';
const imgBaseUrl = 'https://image.tmdb.org/t/p/original';

interface Result {
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

export const Watch: FC = () => {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [numColumns, setNumColumns] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch<any>();
  const [list, setList] = useState<Result[]>([]);
  const [searchData, setSearchData] = useState<Result[]>([]);

  const fetchData = async () => {
    const response = await Get(ApiEndPoints.getUpcomingMovie);

    if (response.results) {
      dispatch(upComingMoviesList({response}));
      setSearchData(response.results);
      setList(response.results);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    setNumColumns(2);
    setIsSearchEnabled(true);
  };

  const handleCloseSearch = () => {
    setSearchQuery('');
    setNumColumns(1);
    setIsSearchEnabled(false);
  };

  const handleSearchQuery = (value: string) => {
    if (value.length === 0) {
      setList(searchData);
    }
    setSearchQuery(value);
    if (value.length > 0) {
      let filteredData = searchData.filter(movie =>
        movie.title.toLowerCase().includes(value.toLowerCase()),
      );
      setList(filteredData);
      setNumColumns(1);
    } else {
      setNumColumns(2);
    }
  };

  return (
    <_Screen background={<Background color={Color.Negative} />} hideTopSafeArea>
      {isSearchEnabled ? (
        <SearchBar
          setSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
          handleCloseSearch={handleCloseSearch}
        />
      ) : (
        <Header handleSearch={handleSearch} />
      )}
      <View style={{backgroundColor: Color.BackgroundColor}}>
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          data={list}
          renderItem={({item, index}) => (
            <Card
              id={item.id}
              title={item.title}
              key={index}
              backgroundPic={imgBaseUrl + item.poster_path}
              isSearchEnabled={isSearchEnabled}
              searchQuery={searchQuery}
            />
          )}
          ListHeaderComponent={
            <FlatlistHeader
              isSearchEnabled={isSearchEnabled}
              searchQuery={searchQuery}
              numberOfResult={list.length}
            />
          }
          ListFooterComponent={() => <View style={{height: 80}} />}
        />
      </View>
    </_Screen>
  );
};
