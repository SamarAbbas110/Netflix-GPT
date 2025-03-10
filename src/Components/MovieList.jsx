import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Check if movies is an array and has items
  const hasMovies = Array.isArray(movies) && movies.length > 0;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold pb-5 text-white">{title}</h1>
      {hasMovies ? (
        <div className="flex overflow-x-scroll">
          <div className="flex gap-2">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-white">No movies available.</p>
      )}
    </div>
  );
};

export default MovieList;