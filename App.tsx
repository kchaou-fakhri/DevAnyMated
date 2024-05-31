import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { RocketScreen } from "@contexts/flyRocket/rocketScreen";
import { GlobalStyles } from "./src/utils/globalStyles";
import { useFonts } from "@hooks/useFonts";

export default function App() {
  useEffect(() => {
    useFonts();
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <RocketScreen />
    </SafeAreaView>
  );
}
