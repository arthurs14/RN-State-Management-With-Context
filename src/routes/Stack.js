import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';

const MainStack = createStackNavigator();

const Stack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Index"
        component={IndexScreen}
        options={{ title: 'Blogs' }}
      />
      <MainStack.Screen
        name="Show"
        component={ShowScreen}
        options={{ title: 'Show Blog Detail' }}
      />
    </MainStack.Navigator>
  );
};

export default Stack;
