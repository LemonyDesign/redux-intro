function countriesVisited(state = {
  countries: []
}, action){
  switch(action.type){
    
    // case 'ADD_COUNTRY':
    // const countriesUpdated = state.countries.concat(action.country) 
    // return { 
    //     countries: countriesUpdated
    //   };
  
    case "ADD_COUNTRY":
    if (!state.countries.includes(action.country)) {
      let updatedCountriesList = state.countries.concat(action.country);
      return {
        countries: updatedCountriesList
      };
    } else {
      return state;
    }


    case 'DELETE_COUNTRY':
    const countryRemoved = state.countries.filter(country => country !== action.country); 
    return { 
        countries: countryRemoved
      };      

    default:
      return state;
  }
}

export default countriesVisited;
