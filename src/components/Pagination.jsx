import React from 'react';
import { Pagination as Pagi } from '@mantine/core';

const Pagination = ({ activePage ,postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
        <Pagi  size='lg' withEdges  total={pageNumbers.length} page={activePage} onChange={(number)=> paginate(number)}  color="red" radius="xl"  />
  );
};

export default Pagination;