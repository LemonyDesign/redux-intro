function country(state = {
  selectedCountry: '',
  countryListOpen: false
}, action){
  switch(action.type){
    case 'SET_COUNTRY_LIST_OPEN':
      const stateOpenUpdated = Object.assign({}, state, {
        countryListOpen: action.countryListOpen
      });

      return stateOpenUpdated;
    case 'SET_SELECTED_COUNTRY':
      const stateCountryUpdated = Object.assign({}, state, {
        selectedCountry: action.selectedCountry
      });

      return stateCountryUpdated;
    default:
      return state;
  }
}

export default country;

// const mockAction = {
//   type: "SET_COUNTRY_LIST_OPEN",
//   selectedCountry: "Germany"
// }

// const expectedState = {
//   selectedCountry: 'Germany',
//   countryListOpen: true
// }

// const expectedState = {
//   selectedCountry: 'Germany',
//   countryListOpen: false
// }