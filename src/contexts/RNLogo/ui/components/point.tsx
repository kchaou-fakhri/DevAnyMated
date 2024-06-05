import { View } from "react-native";

interface Props {
  width: number;
  height: number;
  color: string;
}

export const Point: React.FC<Props> = (props: Props) => {
  return (
    <View
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
        borderRadius: props.width / 2,
      }}
    ></View>
  );
};
