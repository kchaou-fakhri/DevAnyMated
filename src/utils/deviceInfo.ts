import { Dimensions } from "react-native";
import { Device } from "@model/Device";

export const getDeviceDimensions = (): Device => {
  return {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  };
};
