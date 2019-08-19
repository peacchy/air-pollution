import React, { useState } from 'react';


import './App.css';
import dataApiService from './api/data-api-service.js'
import InputAutocomplete from './components/input-autocomplete/InputAutocomplete';
import CardCity from './containers/card-city/CardCity';
import Loader from './components/loader/Loader';

function App() {

  const [citiesData, setCitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCitiesDataHandler = (countryName, pollutionType) => {
    setIsLoading(true);

    dataApiService.getCitiesData(countryName, pollutionType)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        const result = data.results.map(p => {
          return {
            city: p.city,
            pollution: p.value,
            unit: p.unit,
            pollutionType,
          }
        }).filter((value, index, self) => {
          const record = self.find(c => c.city === value.city);
          return self.indexOf(record) === index;
        }).slice(0, 10);
        console.log(result);
        setCitiesData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <div className="App">

      {isLoading === true ? <Loader /> : null}

      <div className="user-input">
        <InputAutocomplete
          getCitiesData={getCitiesDataHandler}
        />
      </div>
      <div className="tiles">
        {!isLoading && citiesData.length > 0 && citiesData.map((city, index) => {
          return (
            <div key={index}>
              <CardCity cityData={city} cityPlace={index + 1} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
