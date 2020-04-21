import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Navigator from './src/routes/MainStack';
import { Provider } from './src/context/BlogContext';

const App = () => {
  return (
    <Provider>
      <Navigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
