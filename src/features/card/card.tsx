import { Card, Image, Text, Button, Group, Flex } from '@mantine/core';

interface Movie {
  name: string;
  year: number;
  rate: number;
  ratePeople: number;
  imageLing: string;
  description: string;
}

export default function CardMovie(data: Movie) {

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ maxWidth: 300 }}>
      <Image
        src={data.imageLing ? data.imageLing : 'https://b1.filmpro.ru/c/266988.700xp.jpg'}
        height={160}
        alt="Norway"
      />
      <Flex justify="space-between" mt="md" mb="xs" direction='column'>
        <Text fw={500} c="#9854F6">{data.name ? data.name : 'Unknown Name'}</Text>
        <Text fw={300} c="dimmed">{data.year ? data.year : 'Unknown year'}</Text>
        <Group>
          <Image
            src="../../assets/star.svg"
          />
          <Text fw={500}>{data.rate ? data.rate : '0.0'}</Text>
          <Text fw={500} c="dimmed">({data.ratePeople ? data.ratePeople : '0.0'})</Text>
        </Group>
      </Flex>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Details
      </Button>
    </Card >
  );
}