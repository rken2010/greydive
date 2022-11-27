import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardContainer } from './components/CardContainer';
import CardDetailsContainer from './components/CardDetailsContainer';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import  theme  from "./theme.js"
import Header from "./components/Header.js"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack  bg='background' color='text' align={'center'}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <CardContainer/> } />
          <Route path="/details/:cliente" element={ <CardDetailsContainer/> } />
        </Routes>
      </BrowserRouter>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
