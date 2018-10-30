import React from 'react';
import VotingButtonsContainer from '../containers/VotingButtonsContainer';
import CountrySelectorContainer from '../containers/CountrySelectorContainer';

function App ({store}) {

    return (
      <div>
        <VotingButtonsContainer store={store} />
        <CountrySelectorContainer store={store} />
      </div>
    )
  
}

export default App;
