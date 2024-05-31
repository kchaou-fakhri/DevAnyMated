import { View, Text, Image, ViewStyle } from "react-native";
import React from "react";
import { GlobalStyles } from "@/src/utils/globalStyles";
import { IMAGES } from "@/src/assets/images";
interface Props {
  width: number;
  height: number;
  style: ViewStyle;
}
export const Flame: React.FC<Props> = (props: Props) => {
  return (
    <View style={[props.style]}>
      <Image source={IMAGES.ROCKET_GIF} />
    </View>
  );
};
