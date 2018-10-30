import React from 'react';

function CountriesVisited({countries, dispatch}){

  function deleteCountry(country){
    event.preventDefault();
    dispatch({
      type: 'DELETE_COUNTRY',
      country: country
    });
  }

  return (
    <ul>
      <li><h3>Visited Countries</h3></li>
      {countries.map(country => {
        return <li key={country} onClick={() => deleteCountry(country)}>{country}</li>
        }) 
      }
    </ul>
  );
}

export default CountriesVisited;
