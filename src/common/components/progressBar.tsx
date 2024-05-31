import { COLORS } from "@utils/colors";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  color?: string;
}

/**
 * ProgressBar is a component representing an animated progress bar.
 * It uses react-native-reanimated for animation and retrieves progress state from the Redux store.
 *
 * @returns {JSX.Element} The ProgressBar component.
 */
export const ProgressBar: React.FC<Props> = (props: Props) => {
  // Create a shared value to animate the progress bar
  const progress = useSharedValue(0);

  const animatedProgress = useAnimatedStyle(() => ({
    marginLeft: progress.value,
  }));

  // useEffect hook to update the progress animation when the component mounts
  useEffect(() => {
    // Set the progress value with animation using react-native-reanimated
    progress.value = withTiming(250, { duration: 2500 });
  }, []);

  return (
    <View
      style={[
        {
          height: 5,
          backgroundColor: props.color ? props.color : COLORS.primary,
          width: 250,
        },
        styles.container,
      ]}
    >
      {/* Animated View representing the progress */}
      <Animated.View
        style={[
          animatedProgress,
          {
            height: 5,
            backgroundColor: COLORS.background.default,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },
});
