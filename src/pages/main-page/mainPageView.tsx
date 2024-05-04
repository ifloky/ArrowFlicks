import { Flex } from "@mantine/core";
import SearchForm from "../../features/search-form/search-form";
import CardMovie from "../../features/card/card";

interface Movie {
  name: string;
  year: number;
  rate: number;
  ratePeople: number;
  imageLing: string;
  description: string;
}

export const MainPageView = () => {
  const data: Movie[] = [
    {
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "https://b1.filmpro.ru/c/266988.700xp.jpg",
      description: "A thief who enters the dreams of others to steal secrets from their subconscious."
    },
    {
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "https://b1.filmpro.ru/c/266988.700xp.jpg",
      description: "A thief who enters the dreams of others to steal secrets from their subconscious."
    },
    {
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "https://b1.filmpro.ru/c/266988.700xp.jpg",
      description: "A thief who enters the dreams of others to steal secrets from their subconscious."
    },
    {
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "https://b1.filmpro.ru/c/266988.700xp.jpg",
      description: "A thief who enters the dreams of others to steal secrets from their subconscious."
    },
  ];

  return (
    <div>
      <h1>Movies</h1>
      <SearchForm  />
      <Flex gap='lg' wrap="wrap" >
        {data.map((movie, index) => (
          <CardMovie key={index} {...movie} />
        ))}
      </Flex>
    </div>
  );
};
