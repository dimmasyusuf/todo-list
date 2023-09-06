import {
  Box,
  IconButton,
  FormControl,
  Input,
  HStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function TodoInput() {
  const [loadingState, setLoadingState] = useState(false);

  const todoSchema = Yup.object().shape({
    todo: Yup.string()
      .required('Todo is a required field')
      .min(3, 'Todo must be at least 3 characters')
      .max(140, 'Todo must be less than 140 characters'),
  });

  const addTodo = () => {
    setLoadingState(true);
    console.log(formik.values);
  };

  const handleValue = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  const formik = useFormik({
    initialValues: {
      todo: '',
    },
    onSubmit: addTodo,
    validationSchema: todoSchema,
  });

  return (
    <Box
      borderWidth='1px'
      p='4'
      flexDirection='row'
      borderRadius='lg'
      width='70%'
    >
      <form onSubmit={formik.handleSubmit}>
        <HStack>
          <FormControl isInvalid={formik.errors.todo && formik.touched.todo}>
            <Input
              type='text'
              placeholder='What are you going to do?'
              onChange={handleValue}
              name='todo'
            />
            <FormErrorMessage>{formik.errors.todo}</FormErrorMessage>
          </FormControl>
          <IconButton
            colorScheme='teal'
            icon={<AddIcon />}
            isLoading={loadingState}
            type='submit'
          />
        </HStack>
      </form>
    </Box>
  );
}

export default TodoInput;
