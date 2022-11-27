import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'

function Header( title ) {
  return(
  <Stack h={"128px"} p={"10%"}>
    <Heading>{title = "Simulacr."}</Heading>
  </Stack>
  )
}

export default Header