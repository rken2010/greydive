import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getClient } from '../db/GetData';
import CardDetails from './CardDetails';

export default function CardDetailsContainer() {
    
    
    const [client, setClient] = useState ( [] )
    const { cliente } = useParams()
    
    useEffect(() => {
      const userSelected = getClient( cliente )
      setClient( userSelected)
      return setClient
    },[cliente])

    return (
        <CardDetails client={ client } />
    )
}
