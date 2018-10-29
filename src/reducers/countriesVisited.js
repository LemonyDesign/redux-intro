function countriesVisited(state = {
  countries: []
}, action){
  switch(action.type){
    case 'ADD_COUNTRY':
      
    const countriesUpdated = state.countries.concat(action.country) 
    return { 
        countries: countriesUpdated
      };

    default:
      return state;
  }
}

export default countriesVisited;
