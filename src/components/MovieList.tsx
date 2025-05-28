import MovieCard from "@/components/MovieCard";
import { type MovieListProps } from "@/types/movie";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function MovieList({ title, movies }: MovieListProps) {
  return (
    <section className="py-8 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center justify-between mb-6 w-full">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <Button variant="ghost" className="gap-1">
            View all <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
          {movies.map((movie) => (
            <div key={movie.id} className="h-full">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
