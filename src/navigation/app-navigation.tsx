import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '../screens/home';
import {Issue1625} from '../screens/#1625';
import {Issue1626} from '../screens/#1626';
import {Issue1628} from '../screens/#1628';

const Root = createNativeStackNavigator();

export const AppNavigation = () => {
  // render
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Root.Screen name="Home" component={Home} />
        <Root.Screen name="Issue1625" component={Issue1625} />
        <Root.Screen name="Issue1626" component={Issue1626} />
        <Root.Screen name="Issue1628" component={Issue1628} />
      </Root.Navigator>
    </NavigationContainer>
  );
};
