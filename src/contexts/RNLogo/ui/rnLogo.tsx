import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { GlobalStyles } from "@/src/utils/globalStyles";
import { Point } from "./components/point";
import { CircleWithPoint } from "./components/CircleWithPoint";

export const RNLogo = () => {
  return (
    <View style={[GlobalStyles.container, styles.customConatiner]}>
      <Point width={35} height={35} color={"#4b57b0"} />
      <CircleWithPoint rotate={"0deg"} radiusX={150} radiusY={50} />
      <CircleWithPoint rotate="55deg" radiusX={-150} radiusY={-50} />
      <CircleWithPoint rotate="125deg" radiusX={150} radiusY={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  customConatiner: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#080108",
  },
});
