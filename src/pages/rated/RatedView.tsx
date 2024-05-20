import { useState, useEffect } from "react";
import { Flex, Pagination, Button, Text } from "@mantine/core";
import SearchComponent from "../../features/search/SearchComponent";
import CardMovie from "../../features/card/card";
import { getMovieById } from "../../api/api";

interface Movie {
  original_title: string;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  genres: Genre[]
}

interface Genre {
  id: number;
  name: string;
}

export const RatedView = () => {
  const FILMS_PER_PAGE = 20;
  const [activePage, setActivePage] = useState(1);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const fetchFavoriteMovies = async () => {
      const moviesData = await Promise.all(favorites.map((movieId: number) => getMovieById(movieId)));
      setFavoriteMovies(moviesData);
    };
    fetchFavoriteMovies();
  }, []);

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  const getTotalPages = () => {
    return Math.ceil(favoriteMovies.length / FILMS_PER_PAGE);
  };

  const getGenreNames = (genreArray: Genre[]): string => {
    return genreArray.map((el: Genre) => el.name).join(', ');
  };


  return (
    <>
      <Flex justify="space-between" align="center">
        <h1>Favorite Movies</h1>
        <SearchComponent />
      </Flex>
      {favoriteMovies.length > 0 ? (
        <>
          <Flex wrap="wrap" gap={10} pb={20}>
            {favoriteMovies.map((movie) => (
              <CardMovie
                id={movie.id}
                name={movie.original_title}
                year={new Date(movie.release_date).getFullYear()}
                rate={movie.vote_average}
                ratePeople={0}
                imageLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                genres={getGenreNames(movie.genres)}
                count={""}
              />
            ))}
          </Flex>
          <Pagination
            style={{ display: 'flex', justifyContent: "center" }}
            total={getTotalPages()}
            value={activePage}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <Flex
          direction="column"
          justify="center"
          align="center"
          style={{ minHeight: '92vh', textAlign: 'center' }}
        >
          <img src="./src/assets/loading.svg" alt="No movies illustration" style={{ maxWidth: '400px', marginBottom: '20px' }} />
          <Text size="lg" w={500} mb="sm" fw={600}>You haven't added any movies to your favorites yet</Text>
          <Button variant="outline" className="purple-btn">Find movies</Button>
        </Flex>
      )}
    </>
  );
};

export default RatedView;
