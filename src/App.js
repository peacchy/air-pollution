import React, { useState } from 'react';


import './App.css';
import InputAutocomplete from './components/input-autocomplete/InputAutocomplete';
import CardCity from './containers/card-city/CardCity';

function App() {
  return (
    <div className="App">
      <InputAutocomplete />
      <div className="tiles">
        <CardCity />
      </div>
    </div>
  );
}

export default App;
