import React, { useEffect, useState } from 'react';
import { Flex } from '@mantine/core';
import CardMovie from '../../features/card/card';
import { Sort } from '../../features/sort/sort';
import FilterForm from '../../features/filter-form/filter-form';
import CustomPagination from '../../features/pagination/PaginationComponent';
import { getMovies, getGenres } from '../../api/api';

interface MovieData {
  original_title: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

interface Genre {
  id: number;
  name: string;
}

export const MainPageView: React.FC = () => {
  const TOTAL_ITEMS = 10000;

  const [movies, setMovies] = useState<MovieData[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMoviesAndGenres = async () => {
      try {
        const moviesData = await getMovies(currentPage);
        const genresData = await getGenres();
        setMovies(moviesData.results);
        setTotalPages(Math.ceil(moviesData.total_results / 20));
        setGenres(genresData.genres);
      } catch (error) {
        setError('Failed to fetch movies and genres data');
      }
    };

    fetchMoviesAndGenres();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getGenreNames = (genreIds: number[]): string => {
    const genreNames = genreIds.map(id => genres.find(genre => genre.id === id)?.name).filter(Boolean);
    return genreNames.join(', ');
  };

  return (
    <div>
      <h1>Movies</h1>
      <FilterForm />
      <Sort />
      {error ? (
        <h2>{error}</h2>
      ) : movies.length > 0 ? (
        <div>
          <Flex gap="10" wrap="wrap">
            {movies.map((movie) => (
              <CardMovie
                key={movie.id}
                id={movie.id}
                name={movie.original_title}
                year={new Date(movie.release_date).getFullYear()}
                rate={movie.vote_average}
                ratePeople={0}
                imageLink={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                genres={getGenreNames(movie.genre_ids)}
                count={""}
              />
            ))}
          </Flex>
          <CustomPagination
            totalItems={TOTAL_ITEMS}
            itemsPerPage={20}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default MainPageView;
