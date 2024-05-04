import { Button, Flex, NumberInput, Select } from '@mantine/core';

const SearchForm = () => {

  return (
    <>
      <form style={{maxWidth: 'calc(100vw - 370px)', marginBottom: '20px', flex: 1}}>
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
          <div>
            Rating:
            <Flex gap="lg">
              <NumberInput
                placeholder="Input placeholder" />
              <NumberInput
                placeholder="Input placeholder" />
            </Flex>
          </div>
          <Button variant="outline">Reset</Button>
        </Flex>
      </form >
    </>
  );
};

export default SearchForm;
