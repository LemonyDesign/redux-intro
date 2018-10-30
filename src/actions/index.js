export function selectButton(button){
  return {
    type: 'SELECT_BUTTON',
    selectedButton: button
  };
};


// country selector actions

export function setSelectedCountry(country){
  return {
    type: 'SET_SELECTED_COUNTRY',
    selectedCountry: country
  }
}

export function setCountryListFalse(){
  return {
    type: 'SET_COUNTRY_LIST_OPEN',
    countryListOpen: false
  }
}

export function setCountryListTrue(){
  return {
    type: 'SET_COUNTRY_LIST_OPEN',
    countryListOpen: true
  }
}





