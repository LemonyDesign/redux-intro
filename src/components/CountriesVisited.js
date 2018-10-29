import React from 'react';

function CountriesVisited({countries}){

  return (
    <ul>
      <li><h3>Visited Countries</h3></li>
      {countries.map(country => {
          console.log(country);
        return <li key={country}>{country}</li>
        }) 
      }
      
    </ul>
  );
}

export default CountriesVisited;
