import { Card, Image, Text, Group, Flex, ActionIcon } from '@mantine/core';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import './card.scss'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Movie {
  id: number
  name: string;
  year: number;
  rate: number;
  ratePeople: number;
  imageLink: string;
  genres: string;
  count: string;
}

export default function CardMovie(data: Movie) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(data.id));
  }, [data.id]);

  const handleFavoriteClick = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(data.id)) {
      favorites = favorites.filter((favoriteId: number) => favoriteId !== data.id);
    } else {
      favorites.push(data.id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Card shadow="sm" radius="md" withBorder style={{ width: 'calc(50% - 5px)' }}>
      <Flex>
        <Image
          src={data.imageLink ? data.imageLink : './src/assets/1.jpg'}
          height={160}
          maw={120}
          mr={15}
          alt="Norway"
        />
        <Flex justify="space-between" direction='column'>
          <Flex gap='calc((35vh + 35vw)/ 100)' direction="column">
            <Text fw={500} c="#9854F6">
              <Link to={`/movie/${data.id}`}>{data.name ? data.name : 'Unknown Name'}</Link>
            </Text>
            <Text fw={300} c="dimmed">{data.year ? data.year : 'Unknown year'}</Text>
            <Group>
              <Image height={20} src="./src/assets/star.svg" alt="Rating Star" />
              <Text fw={500}>{data.rate ? data.rate : '0.0'}</Text>
              <Text fw={500} c="dimmed">({data.ratePeople ? data.ratePeople : '0.0'})</Text>
            </Group>
          </Flex>
          <Text size="sm" c="dimmed" mah={105} style={{ overflow: 'hidden' }}>
            Genres  <span style={{ color: 'black' }}>{data.genres ? data.genres : 'unknown'}</span>
          </Text>
          <ActionIcon
            size="lg"
            className='favorite-btn'
            onClick={handleFavoriteClick}
            aria-label="Add to favorite"
          >
            {isFavorite ? <IconStarFilled /> : <IconStar />}
            {data.count}
          </ActionIcon>
        </Flex>
      </Flex>
    </Card >
  );
}