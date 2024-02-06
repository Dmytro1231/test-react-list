'use client';

import { SimpleGrid, Box, Text, Button } from '@chakra-ui/react';
import { mockElements } from './data/mockData';
import { useRouter } from 'next/navigation';

export default function Page() {
  const navigate = useRouter();

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {mockElements.map((todo) => (
          <Box key={todo.id} p={5} shadow="md" borderWidth="1px">
            <Text>{todo.title}</Text>
          </Box>
        ))}
      </SimpleGrid> 

      <Box mt={5}>
        <Button onClick={() => navigate.push('/add')}>
          Create new todo
        </Button>
      </Box>
    </>
  );
}