import { useState, useEffect } from 'react';
import { Button, Flex, NumberInput, Select, Loader } from '@mantine/core';
import { getMoviesWithCategory, getGenres } from '../../api/api';

interface Movie {
  id: number;
  title: string;
}

const FilterForm = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [ratingFrom, setRatingFrom] = useState<number>(0);
  const [ratingTo, setRatingTo] = useState<number>(10);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const genresData = await getGenres();
        const yearsData = generateYears();
        setGenres(genresData.genres.map((genre: { name: string }) => genre.name));
        setYears(yearsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Failed to fetch genres and years');
      }
    };

    fetchData();
  }, []);

  const generateYears = (): string[] => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 10 }, (_, index) => (currentYear - index).toString());
  };

  const handleFetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const filters = {
        genre: genre || undefined,
        year: year || undefined,
        ratingFrom: ratingFrom || 0,
        ratingTo: ratingTo || 10,
      };
      const data = await getMoviesWithCategory(1, filters);
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Error fetching movies');
    }
  };

  const handleReset = () => {
    setGenre(null);
    setYear(null);
    setRatingFrom(0);
    setRatingTo(10);
    setMovies([]);
    setError(null);
  };

  return (
    <>
      {loading && <Loader />}

      {error && <div>Error: {error}</div>}

      <form style={{ width: "100%", marginBottom: '20px', flex: 1 }}>
        <Flex gap="md" align="flex-end" justify="flex-start">
          <Select
            label="Genres:"
            placeholder="Pick value"
            value={genre}
            onChange={setGenre}
            data={genres} />
          <Select
            label="Release year"
            placeholder="Pick value"
            value={year}
            onChange={setYear}
            data={years} />
          <div>
            Rating:
            <Flex gap="lg">
              <NumberInput
                placeholder="From"
                value={ratingFrom}
                onChange={(value: string | number) => setRatingFrom(typeof value === 'number' ? value : 0)}
                min={0}
                max={10} />
              <NumberInput
                placeholder="To"
                value={ratingTo}
                onChange={(value: string | number) => setRatingTo(typeof value === 'number' ? value : 10)}
                min={0}
                max={10} />
            </Flex>
          </div>
          <Button variant="outline" style={{ minWidth: "75px" }} onClick={handleReset}>Reset</Button>
          <Button variant="outline" style={{ minWidth: "75px" }} onClick={handleFetchMovies}>Search</Button>
        </Flex>
      </form>

      <div>
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FilterForm;
