import React from 'react';
//import logo from './logo.svg';
import Button from "./components/button/Button";
import './App.css';

function App() {
  return (
    <div className="App">
	  <Button center={ { lat: 45.1885, lng: 5.7245} } />
    </div>
  );
}

export default App;
