import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";
import { Play, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface TrendingCarouselProps {
  movies: Movie[];
}

export default function TrendingCarousel({ movies }: TrendingCarouselProps) {  return (
    <section className="py-12 bg-accent/5 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 self-start">Trending This Week</h2>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {movies.map((movie) => (
              <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <img
                    src={movie.backdropPath}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{movie.title}</h3>
                    <div className="flex items-center gap-2 mb-3 text-white/80 text-sm">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span>{movie.voteAverage.toFixed(1)}</span>
                      </div>
                      <span>|</span>
                      <span>{movie.genres[0]}</span>
                      <span>|</span>
                      <span>{movie.releaseDate.split('-')[0]}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="gap-1">
                        <Play className="w-3 h-3" /> Trailer
                      </Button>
                      <Link to={`/movie/${movie.id}`}>
                        <Button size="sm" variant="secondary" className="gap-1">
                          <Info className="w-3 h-3" /> Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
