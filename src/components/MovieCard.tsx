import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Info } from "lucide-react";
import { type MovieCardProps } from "@/types/movie";

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="overflow-hidden group relative h-full">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.posterPath}
          alt={`${movie.title} poster`}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 mr-1 fill-current" />
              <span className="text-sm font-medium">{movie.voteAverage.toFixed(1)}</span>
            </div>
            <div className="text-xs text-white/80">
              {movie.releaseDate.split('-')[0]}
            </div>
          </div>
          <Link to={`/movie/${movie.id}`}>
            <Button variant="secondary" size="sm" className="w-full mt-2">
              <Info className="w-4 h-4 mr-1" />
              Details
            </Button>
          </Link>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm line-clamp-1">{movie.title}</h3>
        <div className="flex flex-wrap gap-1 mt-1">
          {movie.genres.slice(0, 2).map((genre) => (
            <span key={genre} className="text-xs text-muted-foreground">
              {genre}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
