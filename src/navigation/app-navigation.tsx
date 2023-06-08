import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '../screens/home';
import {Issue1625} from '../screens/#1625';

const Root = createNativeStackNavigator();

export const AppNavigation = () => {
  // render
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Root.Screen name="Home" component={Home} />
        <Root.Screen name="Issue1625" component={Issue1625} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
