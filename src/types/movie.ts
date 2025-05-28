export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  trailerPath: string;
  releaseDate: string;
  voteAverage: number;
  genres: string[];
}

export interface MovieCardProps {
  movie: Movie;
}

export interface HeroSectionProps {
  movie: Movie;
}

export interface MovieListProps {
  title: string;
  movies: Movie[];
}
