import { Box, IconButton, FormControl, Input, HStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function TodoInput() {
  return (
    <Box
      borderWidth='1px'
      p='4'
      flexDirection='row'
      borderRadius='lg'
      width='70%'
    >
      <form>
        <HStack>
          <FormControl>
            <Input type='text' placeholder='What are you going to do?' />
          </FormControl>
          <IconButton colorScheme='teal' icon={<AddIcon />} />
        </HStack>
      </form>
    </Box>
  );
}

export default TodoInput;
