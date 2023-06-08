import {
  Canvas,
  Path,
  Skia,
  runTiming,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';
import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

export const Issue1628 = () => {
  // state

  const firstTime = useValue(true);
  const reanimatedPath = useSharedValue(
    Skia.Path.MakeFromSVGString('M0,100 L200,100'),
  );
  const progress = useValue(0);

  const path = useComputedValue(() => {
    if (firstTime.current) {
      console.log('First times is good', reanimatedPath.value);
    } else {
      console.log('Second times path is empty', reanimatedPath.value);
    }

    return reanimatedPath.value!;
  }, [progress]);

  // effect
  useEffect(() => {
    firstTime.current = false;

    const id = setTimeout(() => {
      const nextY = Math.random() * 100;
      const nextX = Math.random() * 200;
      const newPath = Skia.Path.MakeFromSVGString(`M0,100 L${nextX},${nextY}`);
      reanimatedPath.value = newPath;
      runTiming(progress, {from: 0, to: 1});
    }, 2000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render
  return (
    <>
      <Text>
        {
          'When useComputedValue get reanimated 3 value second time, it will return empty => app crash'
        }
      </Text>
      <Canvas style={styles.canvas}>
        <Path path={path} style={'stroke'} color={'red'} strokeWidth={2} />
      </Canvas>
    </>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
