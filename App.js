import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {NavigationContainer} from '@react-navigation/native';

import {store, persistore} from './redux/store';
import Main from './components/Main';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore} loading={null}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
