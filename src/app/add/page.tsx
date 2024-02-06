'use client';

import { z } from 'zod';
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { mockElements } from '../data/mockData';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const NewTodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

export default function Page() {
  type FormSchema = z.infer<typeof NewTodoSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(NewTodoSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormSchema> = (data: { title: string; }) => {
      const { title } = data;
      const newId = mockElements.length + 1;

      mockElements.push({
          id: newId, 
          title,
      });

      router.push('/');
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} p={4}>
      <FormControl isInvalid={!!errors.title}>
        <FormLabel htmlFor="title">
          New Todo title
        </FormLabel>

        <Input 
          id="title" 
          placeholder="Title" 
          {...register("title")} 
        />
        
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Add Todo
      </Button>
    </Box>
  );
}