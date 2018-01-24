export interface IApiMovie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  originalLanguage: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
}

export const mapApiMovie = (movie: IApiMovie): Movie => {
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
