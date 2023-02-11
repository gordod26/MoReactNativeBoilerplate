/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Box>Hello World</Box>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
