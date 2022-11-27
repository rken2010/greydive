import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Text, Box, StackDivider, Heading } from '@chakra-ui/react'

export const WebCard = ({cliente} ) => {
  return (
    <Stack 
      spacing={5} 
      alignItems="center" 
      justifyContent="center" 
      wrap="flexWrap"
      divider={<StackDivider borderColor='gray.200' />} 
      borderRadius="lg" 
      padding="15px" 
      m={5}
      shadow="base">
    <Box padding={5}>
         <Heading as='h1' size='md' textAlign="center" marginBottom={3}>CLIENTE: { cliente }</Heading>
         <Text> Testeador: Tester-1</Text>
    <StackDivider />
    </Box>
     
    <Box>
         <Link to={`/details/${cliente}`}>
             <Button colorScheme='teal' variant='ghost'>Ver detalle</Button>
         </Link>
    </Box> 
 </Stack>
  )
}
