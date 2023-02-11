import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
