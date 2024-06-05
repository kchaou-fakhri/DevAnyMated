import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { RocketScreen } from "@contexts/flyRocket/rocketScreen";
import { GlobalStyles } from "./src/utils/globalStyles";
import { useFonts } from "@/src/helpers/useFonts";
import { PlaneAnimation } from "@contexts/planeLoader/plane";
import { RNLogo } from "./src/contexts/RNLogo/ui/rnLogo";

export default function App() {
  useEffect(() => {
    useFonts();
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.container}>
      {/* <RocketScreen /> */}
      {/* <PlaneAnimation /> */}
      <RNLogo />
    </SafeAreaView>
  );
}
