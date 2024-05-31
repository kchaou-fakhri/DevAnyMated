import { View, Text, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { COLORS } from "@/src/utils/colors";

// Define the props for the Circle component
interface Props {
  size: number; // The diameter of the circle
  color?: string; // Optional background color for the circle
  style?: ViewStyle; // Optional additional styles for the circle
}

/**
 * Circle component
 *
 * @param {Props} props - The properties for the Circle component.
 * @returns {JSX.Element} The rendered Circle component.
 */
export const Circle: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <View
      style={[
        {
          width: props.size,
          height: props.size,
          borderRadius: props.size / 2,
          backgroundColor: props.color
            ? props.color
            : COLORS.background.default,
        },
        props.style,
      ]}
    ></View>
  );
};
