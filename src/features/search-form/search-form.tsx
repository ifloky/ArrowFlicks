import { Button, Container, Flex, NumberInput, Select } from '@mantine/core';

const SearchForm = () => {

  return (
    <>
      <form>
        <Flex gap="md"
          align="flex-end"
        >
          <Select
            label="Genres:"
            placeholder="Pick value"
            data={['Action', 'Comedy', 'Drama', 'Thriller']} />
          <Select
            label="Release year"
            placeholder="Pick value"
            data={['2020', '2021', '2022', '2023']} />
          <Container>
            Rating:
            <Flex gap="lg">
              <NumberInput
                placeholder="Input placeholder" />
              <NumberInput
                placeholder="Input placeholder" />
            </Flex>
          </Container>
          <Button variant="outline">Reset</Button>
        </Flex>
      </form >
    </>
  );
};

export default SearchForm;
