import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ItemNavigateProps} from '../type';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ItemNavigate = ({onPress, title}: ItemNavigateProps) => {
  // render
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});
