import {useValue} from '@shopify/react-native-skia';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSharedValue, withTiming} from 'react-native-reanimated';

export const Issue1626 = () => {
  // state
  const skiaValue = useValue(0);
  const reanimatedValue = useSharedValue(0);

  // effect
  useEffect(() => {
    setTimeout(() => {
      reanimatedValue.value = withTiming(1, undefined, () => {
        // set or get value from skia value on UI thread will crash

        console.log(skiaValue.current);
        // or
        // skiaValue.current = 1;
      });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render
  return (
    <View>
      <Text>App will crash when use skia value on UI thread</Text>
    </View>
  );
};
