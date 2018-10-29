function countriesVisited(state = {
  countries: []
}, action){
  switch(action.type){
    case 'ADD_COUNTRY':
      
    const countriesUpdated = { 
        countries: state.countries.concat(action.country)
      };
      
      return countriesUpdated;

    default:
      return state;
  }
}

export default countriesVisited;
