import { useState } from 'react';
import { Button } from '@mantine/core';
import './SearchComponent.scss';
import { IconSearch } from '@tabler/icons-react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {

  };

  return (
    <div className="search-container">
      <IconSearch stroke={1} />
      <input
        placeholder="Search movie title"
        className="text-input"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <Button
        onClick={handleSearch}
        className="purple-btn"
      >
        Search
      </Button>
    </div >
  );
};

export default SearchComponent;
