import React, { useState } from 'react';


import './App.css';
import InputAutocomplete from './components/input-autocomplete/InputAutocomplete';
import CardCity from './containers/card-city/CardCity';

function App() {
  const [countryName, setCountryName] = useState("");
  const [pollutionType, setPollutionType] = useState("");

  return (
    <div className="App">
      <InputAutocomplete
        countryName={countryName}
        setCountryName={setCountryName}
        setPollutionType={setPollutionType}
      />

      <div className="tiles">
        <CardCity
          countryName={countryName}
          pollutionType={pollutionType}
        />
      </div>
    </div>
  );
}

export default App;
