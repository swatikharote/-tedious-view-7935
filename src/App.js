import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import { AllRoutes } from './pages/All_routes';
import { Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Header />
      <Box pt={"20px"} pb="20px">
        <AllRoutes />
      </Box>
      <Footer />

    </div>
  );
}

export default App;
