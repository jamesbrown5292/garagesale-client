import { Container } from '@material-ui/core';
import React from 'react';
import SaleCardList from './components/saleCard/SaleCardList';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl" component="div">
        <h1>Welcome to Garage Sale App</h1>
        <SaleCardList />
      </Container>
    </div>
  );
}

export default App;
