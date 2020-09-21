import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import { Provider } from 'react-redux';
import ItemModal from './components/itemModal'
import { Container } from  'reactstrap'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// https://youtu.be/TO6akRGXhx8?t=1323

// when did Brad's code become different than mine?
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar></AppNavbar>
      <Container>
        <ItemModal></ItemModal>
        <ShoppingList></ShoppingList>
      </Container>
    </div>
    </Provider>
  );
}

export default App;

// start client and server with npm run dev