import { Text, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { useState , useEffect} from 'react'
import Questions from './Questions'
import { getQuestion } from '../db/GetData'

const CardDetailsTask = ( { escenario} ) => {
  const [question, setQuestion] = useState([])
 
  useEffect(() => {
    const preguntas = getQuestion() 
    setQuestion( preguntas )
   
}, []);
    
  return (
    <section>
      <Stack spacing={4}>
        <Heading
          mt={2}
          mb={2}
        >Tareas</Heading>
            <Text
              mb={2}
              fontSize='md'
              as='b'
            >Escenario: { escenario }</Text>   
      </Stack>
      <Stack>  
        {question.map((question) => (
                <Questions {...question} key={question.id}/>
            ))}
      </Stack>
    </section>
  )
}

export default CardDetailsTask