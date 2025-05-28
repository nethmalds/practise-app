import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Info } from "lucide-react";
import { type MovieCardProps } from "@/types/movie";
import { useEffect, useState } from "react";

export default function MovieCard({ movie }: MovieCardProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Card className="overflow-hidden group relative h-full transition-all hover:shadow-md">
      <Link to={`/practise-app/movie/${movie.id}`} className={isMobile ? "" : "pointer-events-none"}>    
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={movie.posterPath}
            alt={`${movie.title} poster`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-yellow-400">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1 fill-current" />
                <span className="text-xs sm:text-sm font-medium">{movie.voteAverage.toFixed(1)}</span>
              </div>
              <div className="text-xs text-white/80">
                {movie.releaseDate.split('-')[0]}
              </div>
            </div>
            <Link to={`/practise-app/movie/${movie.id}`} className={`block w-full mt-1 sm:mt-2 ${ isMobile ? "pointer-events-none" : "pointer-events-auto" }`}>
              <Button variant="secondary" size="sm" className="w-full h-7 text-xs sm:text-sm">
                <Info className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Details
              </Button>
            </Link>
          </div>
        </div>
      </Link>
        <CardContent className="p-2 sm:p-4">
          <h3 className="font-semibold text-xs sm:text-sm line-clamp-1">{movie.title}</h3>
          <div className="flex flex-wrap gap-1 mt-0.5 sm:mt-1">
            {movie.genres.slice(0, 2).map((genre) => (
              <span key={genre} className="text-[10px] sm:text-xs text-muted-foreground">
                {genre}
              </span>
            ))}
          </div>
        </CardContent>
    </Card>
  );
}
