import React from 'react';
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
    </div>
  );
}

export default App;

// start client and server with npm run dev