import React, { useState } from 'react';
import { Pagination, Flex } from '@mantine/core';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <Flex justify="center" align="center" mt="md">
      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={handlePageChange}
        withEdges
        size="md"
      />
    </Flex>
  );
};

export default CustomPagination;
