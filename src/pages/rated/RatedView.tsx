import { Flex, Pagination, Button, Text } from "@mantine/core";
import SearchComponent from "../../features/search/SearchComponent";
import { useState } from "react";
import CardMovie from "../../features/card/card";

interface Movie {
  id: number;
  name: string;
  year: number;
  rate: number;
  ratePeople: number;
  imageLing: string;
  genres: string;
  count: string;
}

export const RatedView = () => {
  const [activePage, setPage] = useState(1);

  const getTotalCountPage = () => {
    return 10;
  };

  const data: Movie[] = [
    {
      id: 4,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9",
    },
    {
      id: 5,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9",
    },
    {
      id: 6,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9",
    },
    {
      id: 7,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9",
    },
    {
      id: 8,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9",
    },
  ];

  return (
    <>
      {data.length > 0 ? (
        <>
          <Flex justify="space-between" align="center">
            <h1>Rated movies</h1>
            <SearchComponent />
          </Flex>
          <Flex wrap="wrap" gap={10} pb={20}>
            {data.map((movie) => (
              <CardMovie key={movie.id} {...movie} />
            ))}
          </Flex>
          <Pagination
            style={{ display: 'flex', justifyContent: "center" }}
            total={getTotalCountPage()}
            value={activePage}
            onChange={setPage}
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
          <Text size="lg" w={500} mb="sm" fw={600}>You haven't rated any films yet</Text>
          <Button variant="outline" className="purple-btn">Find movies</Button>
        </Flex>
      )}
    </>
  );
};
