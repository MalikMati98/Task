import React, {FC} from 'react';
import {Genres, MovieList, UpcomingMovies} from '.';
interface CardInterface {
  id: number;
  title: string;
  backgroundPic: string;
  isSearchEnabled: boolean;
  searchQuery: string;
}

const Card: FC<CardInterface> = ({
  id,
  title,
  backgroundPic,
  isSearchEnabled,
  searchQuery,
}) => {
  return !isSearchEnabled ? (
    <UpcomingMovies title={title} backgroundPic={backgroundPic} id={id} />
  ) : isSearchEnabled && searchQuery.length > 0 ? (
    <MovieList title={title} backgroundPic={backgroundPic} id={id} />
  ) : (
    <Genres title={title} backgroundPic={backgroundPic} id={id} />
  );
};

export {Card};
