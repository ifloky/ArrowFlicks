import { Button, Flex, NumberInput, Select } from '@mantine/core';

const FilterForm = () => {

  return (
    <>
      <form style={{ width: "100%", marginBottom: '20px', flex: 1 }}>
        <Flex gap="md"
          align="flex-end"
          justify="flex-start"
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
          <Button variant="outline" style={{ minWidth: "75px" }}>Reset</Button>
        </Flex>
      </form >
    </>
  );
};

export default FilterForm;
