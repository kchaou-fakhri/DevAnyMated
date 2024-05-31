import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import React from "react";
import { GlobalStyles } from "@/src/utils/globalStyles";
import { IMAGES } from "@/src/assets/images";
import { COLORS } from "@/src/utils/colors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
} from "react-native-reanimated";
import { Smoke } from "@contexts/flyRocket/components/smoke";
import * as Font from "expo-font";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const duration = 2500;
const durationFlame = 1000;
const DELAY = 1000;

export const RocketScreen = () => {
  const flyRocketAnimation = useSharedValue(0);

  const flameAnimation = useSharedValue(0);

  const SmokeAnimation = useSharedValue(-50);

  const offset = useSharedValue(windowWidth / 2 - 160);

  const animatedRocket = useAnimatedStyle(() => ({
    bottom: flyRocketAnimation.value,
  }));

  const animatedFlame = useAnimatedStyle(() => ({
    width: flameAnimation.value,
    height: flameAnimation.value,
  }));

  const movementStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  React.useEffect(() => {
    flameAnimation.value = withDelay(
      DELAY * 1,
      withTiming(80, {
        duration: durationFlame * 1.5,
      })
    );
    flyRocketAnimation.value = withDelay(
      DELAY + 200,
      withTiming(windowHeight + 50, {
        duration,
      })
    );

    SmokeAnimation.value = withDelay(
      DELAY + 200,
      withTiming(400, {
        duration,
      })
    );
    offset.value = withDelay(
      DELAY - 300,
      withRepeat(withTiming(-offset.value, { duration: 1750 }), -1, true)
    );
  }, []);

  return (
    <View style={[GlobalStyles.container]}>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={IMAGES.ROCKET}
          style={[styles.image, animatedRocket, movementStyle]}
        />

        <Animated.View style={[animatedRocket, animatedFlame, movementStyle]}>
          <Image source={IMAGES.ROCKET_GIF} style={styles.flameContainer} />
        </Animated.View>

        <Animated.View
          style={[{ bottom: SmokeAnimation }, styles.smokeContainer]}
        >
          <Smoke />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  flameContainer: {
    marginTop: 5,
    width: "100%",
    height: "100%",
    transform: [{ rotateX: "180deg" }],
  },
  smokeContainer: {
    width: "100%",
  },
  textContainet: {
    top: windowHeight / 1.7,
    width: windowWidth,
    alignItems: "center",
    position: "absolute",
  },
});
