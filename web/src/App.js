import React from 'react';
import Header from '../src/components/header/header'
import Routes from '../src/routers'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes />
      </Container>
    </div>
  );
}

export default App;
