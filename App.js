import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Navigator from './src/routes/MainStack';
import { BlogProvider } from './src/context/BlogContext';

const App = () => {
  return (
    <BlogProvider>
      <Navigator />
    </BlogProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
