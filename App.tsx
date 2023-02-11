import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import TabNavigator from './router/tabNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <TabNavigator />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
