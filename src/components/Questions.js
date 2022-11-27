import React from 'react'
import { Stack, Divider, Text } from '@chakra-ui/react'

const Questions = ( preguntas) => {
  

  return (
    <article>
      <Stack>
      <Divider orientation='horizontal' />
        <Text
          mt={2}
          mb={2}
          paddingLeft={4}
          as='b'
          fontSize='lg'
        >Tarea {preguntas.id}</Text>
        <Text p={2}  as='b' fontSize='lg' paddingLeft={4}> {preguntas.texto}</Text>
        { preguntas.respuesta=="3"?
        <Text paddingLeft={4}  as='b'
          fontSize='md'>Respuesta: {preguntas.respuesta}</Text> :
          <Text></Text>}
        <Text 
          color="textDuration"
          paddingLeft={4}
        >Duración de la tarea: {preguntas.tiempo}</Text>
        
      </Stack>
   </article>
  )
}

export default Questions