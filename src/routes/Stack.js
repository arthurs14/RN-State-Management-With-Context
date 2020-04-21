import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';
import CreateScreen from '../screens/CreateScreen';

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
      <MainStack.Screen
        name="Create"
        component={CreateScreen}
        options={{ title: 'Create New Post' }}
      />
    </MainStack.Navigator>
  );
};

export default Stack;
