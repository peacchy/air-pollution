import React, { useState, useEffect } from 'react';


import './App.css';
import dataApiService from './api/data-api-service.js'
import InputAutocomplete from './components/input-autocomplete/InputAutocomplete';
import CardCity from './containers/card-city/CardCity';

function App() {
  const [countryName, setCountryName] = useState("");
  const [pollutionType, setPollutionType] = useState("");

  useEffect(() => {
    console.log(countryName, pollutionType);
  }, [countryName, pollutionType])

  const getCitiesDataHandler = (countryName, pollutionType) => {
    const countryCode = dataApiService.getCountryCodeByName(countryName)
    const citiesData = dataApiService.getCitiesData(countryCode, pollutionType);
    console.log(citiesData);
    console.log("Button click!");
    return citiesData;
  }



  return (
    <div className="App">
      <div className="user-input"></div>
      <InputAutocomplete
        countryName={countryName}
        setCountryName={setCountryName}
        setPollutionType={setPollutionType}
        getCitiesData={getCitiesDataHandler}
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
