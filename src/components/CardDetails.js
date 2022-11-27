import React from 'react'
import { Stack, Container} from "@chakra-ui/react"
import { CardDetailsTitle } from './CardDetailsTitle'
import { CardDetailsVideo } from './CardDetailsVideo'
import { CardDetailsTranscription } from './CardDetailsTranscription'
import CardDetailsTask from './CardDetailsTask'

function CardDetails ( {client} ) {
  return (
    <Container maxW='80%' >
      <Stack spacing={4}>
      <CardDetailsTitle cliente={client.cliente}/>
      <CardDetailsVideo cliente = {client.cliente} linkVideo = { client.linkVideo} />
      <CardDetailsTranscription  transcripcion={ client.transcripcion }/>
      <CardDetailsTask escenario = {client.escenario} />   
      </Stack>
    </Container>
  )
}

export default CardDetails