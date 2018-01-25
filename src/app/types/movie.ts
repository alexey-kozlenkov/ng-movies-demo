export interface IApiMovie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export interface MovieCard {
  id: number;
  title: string;
  originalTitle: string;
  originalLanguage: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
}

export interface MovieDetails extends MovieCard {
  posterPath: string;
}

export const mapApiMovieToCard = (movie: IApiMovie): MovieCard => {
  return {
    id: movie.id,
    title: movie.title,
    originalTitle: movie.original_title,
    originalLanguage: movie.original_language,
    overview: movie.overview,
    releaseDate: movie.release_date,
    voteAverage: movie.vote_average,
  };
};

export const mapApiMovieToDetails = (apiMovie: IApiMovie): MovieDetails => {
  const movieCard = mapApiMovieToCard(apiMovie);
  return {
    posterPath: apiMovie.poster_path,
    ...movieCard,
  };
};
