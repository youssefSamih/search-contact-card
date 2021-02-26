import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import ListIContact from './Components/ListIContact';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <ListIContact />
      </Container>
    </>
  );
};

export default App;
