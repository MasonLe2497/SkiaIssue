import {
  Canvas,
  Path,
  Skia,
  runTiming,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

export const Issue1625 = () => {
  // state
  const fromPath = useValue(Skia.Path.MakeFromSVGString('M0,100 L200,100'));
  const toPath = useValue(Skia.Path.MakeFromSVGString('M0,100 L200,100'));
  const progress = useValue(0);

  const path = useComputedValue(() => {
    if (toPath.current === null || fromPath.current === null) {
      return Skia.Path.Make();
    }
    return toPath.current.interpolate(fromPath.current, progress.current)!;
  }, [progress]);

  // effect
  useEffect(() => {
    const id = setInterval(() => {
      const nextY = Math.random() * 100;
      const nextX = Math.random() * 200;
      const newPath = Skia.Path.MakeFromSVGString(`M0,100 L${nextX},${nextY}`);
      fromPath.current = toPath.current;
      toPath.current = newPath;
      runTiming(progress, {from: 0, to: 1});
    }, 2000);
    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render
  return (
    <Canvas style={styles.canvas}>
      <Path path={path} style={'stroke'} color={'red'} strokeWidth={2} />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
