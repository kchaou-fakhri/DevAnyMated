import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "@/src/utils/colors";
import { Circle } from "./circle";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Point } from "./point";

interface Props {
  rotate?: string;
  radiusX: number;
  radiusY: number;
}
const duration = 3000; // duration of the animation

export const CircleWithPoint: React.FC<Props> = (props: Props) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(2 * Math.PI, {
        duration,
        easing: Easing.linear,
      }),
      -1 // repeat indefinitely
    );
  }, []);

  // Calculate the x and y coordinates based on the progress for an elliptical path
  const animatedStyle = useAnimatedStyle(() => {
    const radiusX = props.radiusX; // horizontal radius of the oval
    const radiusY = props.radiusY; // vertical radius of the oval
    const x = radiusX * Math.cos(progress.value);
    const y = radiusY * Math.sin(progress.value);

    return {
      transform: [{ translateX: x }, { translateY: y }],
    };
  });
  return (
    <View
      style={[styles.container, { transform: [{ rotate: props.rotate!! }] }]}
    >
      <Circle />
      <View style={[styles.animatedPoints]}>
        <Animated.View style={[animatedStyle]}>
          <Point width={15} height={15} color={"#f7af5a"} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  animatedPoints: {
    position: "absolute",
  },
});
