import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens/IndexScreen';

const MainStack = createStackNavigator();

const Stack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Index"
        component={IndexScreen}
        options={{ title: 'Blogs' }}
      />
    </MainStack.Navigator>
  );
};

export default Stack;
