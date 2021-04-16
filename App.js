import React from 'react';
import RootNavigation from './src/route';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}