import { View, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { GlobalStyles } from "@/src/utils/globalStyles";
import { COLORS } from "@/src/utils/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useProgressStore } from "@/src/store/progress/useProgess";
import { ProgressBar } from "@/src/common/components/progressBar";
import { IMAGES } from "@/src/assets/images";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
// Animation delay for splash screen
const DELAY = 300;
const duration = 2500;

export const PlaneAnimation = () => {
  const progressAnimation = useSharedValue(0);
  const movementAnimation = useSharedValue(0);
  const rotationAnimation = useSharedValue(0);

  const flyPlane = useAnimatedStyle(() => ({
    marginBottom: progressAnimation.value,
    marginLeft: movementAnimation.value,
    transform: [{ rotate: `${-rotationAnimation.value}deg` }],
  }));

  React.useEffect(() => {
    movementAnimation.value = withTiming(windowWidth, {
      duration,
    });
    progressAnimation.value = withDelay(
      DELAY,
      withTiming(120, {
        duration,
      })
    );

    rotationAnimation.value = withDelay(
      DELAY,
      withTiming(40, {
        duration,
      })
    );
  }, []);
  return (
    <View style={[GlobalStyles.container, styles.customContainer]}>
      <View style={[styles.imageContainer]}>
        <Animated.Image
          source={IMAGES.PLANE}
          style={[flyPlane, styles.image]}
        />
      </View>

      <ProgressBar color={"#039ac4"} />
    </View>
  );
};

const styles = StyleSheet.create({
  customContainer: {
    backgroundColor: COLORS.background.default,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 30,
  },
  imageContainer: {
    width: 300,

    height: 300,
    justifyContent: "flex-end",
  },
});
