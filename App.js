import React, { Component } from 'react';
import TabNavigator from './src/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store} style={{ flex: 1 }}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}