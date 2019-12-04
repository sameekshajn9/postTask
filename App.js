/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationComponent from './src/navigation';
import { store } from './src/store';

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <NavigationComponent />
        </Provider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  }
});

export default App;
