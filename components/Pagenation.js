//components/Pagination.js
import Router from 'next/router';
import Link from 'next/link';
import { Center, Square, Circle } from '@chakra-ui/react'
import { Box, Wrap, WrapItem } from "@chakra-ui/react";

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 9;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <Wrap justify="center">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <WrapItem key={index}>
          <Link href={`/blog/page/${number}`}>
            <Circle size='40px' bg='blue.50' cursor="pointer">
              {number}
            </Circle>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
};