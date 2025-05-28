import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";
import { Play, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface TrendingCarouselProps {
  movies: Movie[];
}

export default function TrendingCarousel({ movies }: TrendingCarouselProps) {
  return (
    <section id="tranding" className="py-8 sm:py-10 md:py-12 bg-accent/5 w-full">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 self-start">Trending This Week</h2>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {movies.map((movie) => (
              <CarouselItem key={movie.id} className="pl-2 sm:pl-4 basis-full xs:basis-2/3 sm:basis-1/2 md:basis-[33%] lg:basis-1/3">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={movie.backdropPath}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  <div className="absolute bottom-0 scale-90 left-0 right-0 p-2 sm:p-3 md:p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1 line-clamp-1">{movie.title}</h3>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2 sm:mb-3 text-white/80 text-xs sm:text-sm">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-0.5 sm:mr-1">★</span>
                        <span>{movie.voteAverage.toFixed(1)}</span>
                      </div>
                      <span className="hidden xs:inline-block">|</span>
                      <span className="hidden xs:inline-block">{movie.genres[0]}</span>
                      <span className="hidden xs:inline-block">|</span>
                      <span>{movie.releaseDate.split('-')[0]}</span>
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      <Button size="sm" className="h-7 sm:h-8 text-xs sm:text-sm px-2 sm:px-3 gap-0.5 sm:gap-1">
                        <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Trailer
                      </Button>
                      <Link to={`/practise-app/movie/${movie.id}`}>
                        <Button size="sm" variant="secondary" className="h-7 sm:h-8 text-xs sm:text-sm px-2 sm:px-3 gap-0.5 sm:gap-1">
                          <Info className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
         {/*  <div className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext/>
          </div> */}
        </Carousel>
      </div>
    </section>
  );
}
