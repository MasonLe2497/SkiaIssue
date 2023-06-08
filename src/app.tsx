import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigation} from './navigation/app-navigation';

export const App = () => {
  // render
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.root}>
        <AppNavigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
