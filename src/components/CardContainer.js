import React from 'react'
import { useState , useEffect} from 'react'
import { getData } from '../db/GetData'
import { WebCard } from './WebCard'
import { Container } from '@chakra-ui/react'




export const CardContainer = () => {

  const [data, setData] = useState([])
 
  useEffect(() => {
    const clientList = getData()
    setData( clientList )  
}, []); 
  
 
  return (
    <Container
      maxW='container.lg'
      centerContent
      margin="10px"
      flexDirection={"row"}
      
    >
      {data.map((data) => (
                <WebCard {...data} key={data.cliente}/>
            ))}
    </Container>
  )
}

