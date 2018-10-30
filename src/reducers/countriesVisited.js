const inititalState = {
  countries: []
}

function countriesVisited(state = inititalState, action){
  switch(action.type){
    case "ADD_COUNTRY":
    if (state.countries.includes(action.country)) {

      return state;

    } else {
      // const updatedCountriesList = state.countries.concat([action.country]);

      const updatedCountriesList = [
        ...state.countries,
        action.country
      ]

      const newState = Object.assign({}, state, {
        countries: updatedCountriesList
      })
      return newState;

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
