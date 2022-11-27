import React from 'react'
import { Box, Heading, AspectRatio } from '@chakra-ui/react'

export const CardDetailsVideo = ( {cliente, linkVideo}) => {
  return (
    <section>
      <Box>
            <Heading>Testeador 1</Heading>
                <AspectRatio maxW='950px' ratio={1}>
                <iframe
                  title={ cliente }
                  src={ linkVideo }
                  allowFullScreen
                />
                </AspectRatio>
      </Box>
    </section>
  )
}
