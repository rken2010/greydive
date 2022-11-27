import React from 'react'
import { Box, Accordion, AccordionItem, AccordionButton, Heading, AccordionIcon, AccordionPanel } from '@chakra-ui/react'

export const CardDetailsTranscription = ( {transcripcion} ) => {
 
  return (
    <section className= "transcription">
        <Box>
            <Accordion  allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    <Heading>Transcripcion</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                { transcripcion }
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
        </Box>
    </section>
  )
}


 