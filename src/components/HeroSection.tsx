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
  }, [api]);  return (
    <div className="relative w-full h-[95vh] overflow-hidden">      
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
        <CarouselContent className="h-[95vh] w-full -ml-0">
          {carouselMovies.map((movie) => (
            <CarouselItem key={movie.id} className="h-full w-full pl-0">
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                  style={{ backgroundImage: `url(${movie.backdropPath})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                
                {/* Content */}
                <div className="relative container mx-auto h-full flex flex-col justify-center">
                  <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{movie.title}</h1>
                    <div className="flex items-center gap-4 mb-4 text-white/80">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span>{movie.voteAverage.toFixed(1)}/10</span>
                      </div>
                      <span>{movie.releaseDate.split('-')[0]}</span>
                      <div className="flex gap-1">
                        {movie.genres.slice(0, 2).map((genre) => (
                          <span key={genre} className="text-sm">{genre}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-white/90 mb-6 line-clamp-3">{movie.overview}</p>
                    <div className="flex gap-4">
                      <Button className="gap-2">
                        <Play className="h-4 w-4" />
                        Watch Trailer
                      </Button>
                      <Link to={`/movie/${movie.id}`}>
                        <Button variant="outline" className="gap-2 border-white/50 hover:bg-white/10">
                          <Info className="h-4 w-4" />
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
        
        {/* Custom Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {carouselMovies.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === index ? "bg-white w-6" : "bg-white/40"
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
       {/*  <CarouselPrevious className="left-4 bg-black/50 text-white border-none hover:bg-black/70" />
        <CarouselNext className="right-4 bg-black/50 text-white border-none hover:bg-black/70" /> */}
      </Carousel>
    </div>
  );
}
