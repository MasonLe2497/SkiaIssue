import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {ItemNavigate} from './components/item-navigate';

export const Home = () => {
  // state
  const navigation = useNavigation();

  // func
  const handleNavigate = (screenName: string) => {
    return () => {
      navigation.navigate(screenName);
    };
  };

  // render
  return (
    <ScrollView>
      <ItemNavigate title="Issue1625" onPress={handleNavigate('Issue1625')} />
      <ItemNavigate title="Issue1626" onPress={handleNavigate('Issue1626')} />
      <ItemNavigate title="Issue1628" onPress={handleNavigate('Issue1628')} />
    </ScrollView>
  );
};
