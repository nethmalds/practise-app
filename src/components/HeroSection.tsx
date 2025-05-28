import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";
import { type Movie } from "@/types/movie";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { featuredMovies, popularMovies } from "@/data/mockMovies";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  movie?: Movie; // Make movie optional as we'll use our own data array
}

export default function HeroSection(_props: HeroSectionProps) {
  // Combine featuredMovies and some popularMovies for the carousel
  const carouselMovies = [...featuredMovies, ...popularMovies.slice(0, 2)];
  // State for autoplay interval
  const [api, setApi] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Set up autoplay
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [api]);
  
  // Track current slide index
  useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);
  
  return (
    <div id="hero" className="relative w-full h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-[95vh] overflow-hidden">      
      <Carousel 
        className="w-full h-full flex flex-col"
        opts={{
          loop: true,
          align: "center",
          skipSnaps: false,
          dragFree: false,
          containScroll: "trimSnaps"
        }}
        setApi={setApi}
      >
        {/* Make sure CarouselContent takes full height */}
        <CarouselContent className="h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-[95vh] w-full -ml-0">
          {carouselMovies.map((movie) => (
            <CarouselItem key={movie.id} className="h-full w-full pl-0">
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div 
                  className="absolute hidden xl:block inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                  style={{ backgroundImage: `url(${movie.backdropPath})` }}
                /> <div 
                  className="absolute xl:hidden inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                  style={{ backgroundImage: `url(${movie.posterPath})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="relative container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                  <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">{movie.title}</h1>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-white/80 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span>{movie.voteAverage.toFixed(1)}/10</span>
                      </div>
                      <span>{movie.releaseDate.split('-')[0]}</span>
                      <div className="flex gap-1">
                        {movie.genres.slice(0, 2).map((genre) => (
                          <span key={genre} className="text-xs sm:text-sm">{genre}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">{movie.overview}</p>
                    <div className="flex gap-2 sm:gap-4 flex-wrap">
                      <Button size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                        <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                        Watch Trailer
                      </Button>
                      <Link to={`/movie/${movie.id}`}>
                        <Button size="sm" variant="outline" className="gap-1 sm:gap-2 border-white/50 hover:bg-white/10 text-xs sm:text-sm">
                          <Info className="h-3 w-3 sm:h-4 sm:w-4" />
                          More Info
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Indicator dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {carouselMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === index ? "bg-white scale-125" : "bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
