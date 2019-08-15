import React, { useState } from 'react';


import './App.css';
import InputAutocomplete from './components/input-autocomplete/InputAutocomplete';

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <InputAutocomplete value={inputValue} onChange={setInputValue} />
    </div>
  );
}

export default App;
