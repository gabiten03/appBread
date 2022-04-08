
import * as React from 'react';

import { Provider } from 'react-redux';
import store from './store';


import BreadNavigation from './navigation/BreadNavigation';


function App() {
  return (
    <Provider store={store} >
      <BreadNavigation />
    </Provider>
  );
}

export default App;