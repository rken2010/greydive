import React from 'react'
import {  Heading, Stack } from '@chakra-ui/react'

export const CardDetailsTitle = ( {cliente} ) => {
  return (
    <Stack spacing={5}>
        <Heading>Nombre del Cliente: {cliente}</Heading>
        <Heading> Test: Test de usabilidad en el sitio web</Heading>
    </Stack>
  )
}
