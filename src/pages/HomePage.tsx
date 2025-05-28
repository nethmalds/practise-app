import HeroSection from "@/components/HeroSection";
import MovieList from "@/components/MovieList";
import TrendingCarousel from "@/components/TrendingCarousel";
import { featuredMovies, popularMovies, upcomingMovies } from "@/data/mockMovies";

export default function HomePage() {
  // Use the first featured movie for the hero section
  const heroMovie = featuredMovies[0];

  return (
    <div>
      <div id ="hero">
        <HeroSection movie={heroMovie} />
      </div>
      <div id="tranding" className="w-full flex justify-center">
        <TrendingCarousel movies={[...popularMovies, ...featuredMovies].slice(0, 6)} />
      </div>
        <div className="w-full flex flex-col items-center">
        <MovieList title="Featured Movies" movies={featuredMovies} />
        <div id="popular-now">
          <MovieList title="Popular Now" movies={popularMovies} />
        </div>
        <div id="coming-soon">
         <MovieList title="Coming Soon" movies={upcomingMovies} />
        </div>
      </div>
    </div>
  );
}
