import { View } from "react-native";
import CounterView from "./screen/CounterView";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CounterView />
    </View>
  );
}
