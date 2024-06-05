import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@/src/utils/colors";

interface Props {
  rotate?: string;
}

export const Circle: React.FC<Props> = (props: Props) => {
  return (
    <View
      style={[
        styles.oval,
        {
          transform: [
            { rotate: props.rotate ? props.rotate : "180deg" },
            { scaleX: 3 },
          ],
        },
      ]}
    ></View>
  );
};

const styles = StyleSheet.create({
  oval: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,

    borderColor: "#4b57b0",
  },
});
