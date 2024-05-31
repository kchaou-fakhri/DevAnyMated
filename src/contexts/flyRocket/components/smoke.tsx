import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "@/src/utils/globalStyles";
import { Circle } from "@/src/common";
import { getRandomInt } from "@/src/hooks/useRandom";
import { COLORS } from "@/src/utils/colors";

export const Smoke = () => {
  const smokes = (min: number, max: number) => {
    let smokeComponents = [];
    for (let index = min; index < max; index++) {
      smokeComponents.push(
        <Circle
          key={index}
          size={index}
          style={{
            margin: getRandomInt(15) * -1,
            paddingBottom: index,
          }}
        />
      );
    }

    return smokeComponents;
  };

  return (
    <View style={[GlobalStyles.container, styles.customContainer]}>
      <View style={styles.leftSide}>{smokes(10, 50)}</View>

      <View style={styles.rightSide}>{smokes(10, 50)}</View>

      <View style={styles.restOfSmoke} />
    </View>
  );
};

const styles = StyleSheet.create({
  customContainer: {
    flexDirection: "row",
    position: "absolute",
    flex: 1,

    backgroundColor: COLORS.background.default,
  },
  leftSide: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  rightSide: {
    flex: 1,
    flexDirection: "row",
  },
  restOfSmoke: {
    width: "100%",
    backgroundColor: COLORS.background.default,
    height: 400,
  },
});
