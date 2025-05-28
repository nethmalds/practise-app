import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Star, Clock, ArrowLeft } from "lucide-react";
import { getMovieById } from "@/data/mockMovies";
import { Link } from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const movie = getMovieById(Number(id));
  if (!movie) {
    return (
      <div className="container py-8 sm:py-12 md:py-16 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Movie not found</h1>
        <Link to="/">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      {/* Hero Banner with Movie Details */}
      <div className="relative w-full">
        {/* Backdrop Image */}
        <div className="absolute inset-0 h-[50vh] sm:h-[60vh] md:h-[70vh]">
          <img
            src={movie.backdropPath}
            alt={`${movie.title} backdrop`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>

        {/* Content */}
        <div className="relative container pt-16 sm:pt-24 md:pt-36 pb-8 sm:pb-12 md:pb-16 flex flex-col items-center lg:items-start lg:flex-row gap-6 lg:gap-8 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Poster */}
          <div className="shrink-0 w-48 sm:w-56 md:w-64 mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-xl">
            <img
              src={movie.posterPath}
              alt={`${movie.title} poster`}
              className="w-full h-auto"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col max-w-3xl w-full mt-6 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center lg:text-left">{movie.title}</h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-4 sm:mb-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-medium text-foreground">{movie.voteAverage.toFixed(1)}</span>
                <span>/10</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{movie.releaseDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>120 min</span>
              </div>
            </div>
            
            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 justify-center lg:justify-start">
              {movie.genres.map(genre => (
                <span 
                  key={genre} 
                  className="px-2 sm:px-3 py-1 bg-accent rounded-full text-[10px] sm:text-xs font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center lg:text-left">{movie.overview}</p>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-auto justify-center lg:justify-start">
              <Button size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                Watch Trailer
              </Button>
              <Button size="sm" variant="secondary" className="text-xs sm:text-sm">Add to Watchlist</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar Movies Section */}
      <div className="container py-8 sm:py-10 md:py-12 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 self-start">You Might Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 w-full">
          {/* This would normally be dynamic similar movies */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-[2/3] bg-accent/20 rounded-md animate-pulse" />
          ))}
        </div>
      </div>

      {/* Cast Section (Placeholder) */}
      <div className="container py-8 sm:py-10 md:py-12 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 self-start">Cast & Crew</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 w-full">
          {/* This would normally be dynamic cast info */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="text-center">
              <div className="aspect-square bg-accent/20 rounded-full mb-2 animate-pulse" />
              <div className="h-3 sm:h-4 bg-accent/20 rounded mb-1 animate-pulse" />
              <div className="h-2 sm:h-3 bg-accent/10 rounded w-2/3 mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
