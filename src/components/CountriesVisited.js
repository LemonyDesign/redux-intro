import React from 'react';

function CountriesVisited({countries}){

  return (
    <ul>
      {countries.map(country => {
          console.log(country);
        return <li key={country}>{country}</li>
        }) 
      }
      
    </ul>
  );
}

export default CountriesVisited;
