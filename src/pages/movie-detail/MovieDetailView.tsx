import { useState, useEffect } from 'react';
import { Image, Container, Group, Text, Flex } from '@mantine/core';
import BreadcrumbsElement from '../../features/breadcrumbs/Breadcrumbs';
import './MovieDetailPage.scss';

type BreadcrumbItem = {
  title: string;
  href: string;
};

type MovieData = {
  id: number;
  movieImg: string;
  movieTitle: string;
  releaseYear: number;
  rating: number;
  duration: string;
  premiereDate: string;
  budget: string;
  grossWorldwide: string;
  genres: string[];
};

async function fetchMovieData(movieId: number): Promise<MovieData> {
  try {
    const response = await fetch(`https://api.example.com/movies/${movieId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }
    const movieData: MovieData = await response.json();
    return movieData;
  } catch (error) {
    throw new Error('Error fetching movie data: ' + (error as Error).message);
  }
}

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<MovieData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieData: MovieData = await fetchMovieData(4);
        setMovie(movieData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setIsLoading(false);
        setMovie({
          id: 0,
          movieImg: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",
          movieTitle: "The Green Mile",
          releaseYear: 1999,
          rating: 9.3,
          duration: "3h 09m",
          premiereDate: "December 6, 1999",
          budget: "$125,000,000",
          grossWorldwide: "$760,006,945",
          genres: ["Drama", "Crime", "Fantasy"]
        });
      }
    };

    fetchMovieById();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Error: Movie data not found</div>;
  }

  const { movieImg, movieTitle, releaseYear, rating, duration, premiereDate, budget, grossWorldwide, genres } = movie;

  const items: BreadcrumbItem[] = [
    { title: 'Home', href: '/' },
    { title: 'Movie', href: '/movies' },
    { title: movieTitle, href: `/movies/${movie.id}` },
  ];

  return (
    <Container>
      <BreadcrumbsElement items={items} />
      <div className="movie-detail-container" style={{ display: "flex" }}>
        <Image
          radius="md"
          w="260px"
          mr="20px"
          src={movieImg}
        />
        <div>
          <Flex direction="column" justify="flex-start" align="flex-start" p={"0 0 40 0"}>
            <h1 className="movie-title">{movieTitle}</h1>
            <p className="movie-date">{releaseYear}</p>
            <Group>
              <Image
                height={20}
                src="../src/assets/star.svg"
              />
              <Text fw={500}>{rating ? rating : '0.0'}</Text>
              <Text fw={500} c="dimmed">({rating ? rating : '0.0'})</Text>
            </Group>
          </Flex>
          <div>
            <p className="movie-info"><span>Duration:</span> {duration}</p>
            <p className="movie-info"><span>Premiere</span> {premiereDate}</p>
            <p className="movie-info"><span>Budget:</span> {budget}</p>
            <p className="movie-info"><span>Gross Worldwide:</span> {grossWorldwide}</p>
            <p className="movie-info"><span>Genres:</span> {genres.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="movie-detail-container" style={{ marginTop: "20px" }}>
        <h3>Trailer</h3>
        <video controls width="400">
          <source src="https://www.youtube.com/watch?v=QdBZY2fkU-0" type="video/mp4" />
        </video>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut temporibus modi dolore tenetur ea</p>
        <h3>Production</h3>
        {[0, 1, 2].map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>
    </Container >
  );
}


export default MovieDetailPage;
