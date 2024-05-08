import { Flex } from "@mantine/core";
import CardMovie from "../../features/card/card";
import { Sort } from "../../features/sort/sort";
import FilterForm from "../../features/filter-form/filter-form";

interface Movie {
  id: number
  name: string;
  year: number;
  rate: number;
  ratePeople: number;
  imageLing: string;
  genres: string;
  count: string;
}

export const MainPageView = () => {
  const data: Movie[] = [
    {
      id: 4,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9"
    },
    {
      id: 5,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9"
    },
    {
      id: 6,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9"
    },
    {
      id: 7,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9"
    },
    {
      id: 8,
      name: "Inception",
      year: 2010,
      rate: 8.8,
      ratePeople: 1981603,
      imageLing: "./src/assets/1.jpg",
      genres: "Drama, Crime",
      count: "9"
    },
  ];

  return (
    <div>
      <h1>Movies</h1>
      <FilterForm />
      <Sort />
      <Flex gap='10' wrap="wrap">
        {data.map((movie, index) => (
          <CardMovie key={index} {...movie} />
        ))}
      </Flex>
    </div>
  );
};
