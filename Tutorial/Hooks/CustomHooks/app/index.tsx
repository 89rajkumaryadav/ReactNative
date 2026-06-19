import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const arrData = [
    "custom Hooks",
    "useState Hooks",
    "useEffect Hooks",
    "useRef Hooks",
  ];
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={arrData}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "#ccc", height: 1, width: "100%" }} />
        )}
        renderItem={({ item }) => {
          return (
            <>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    if (item == "Custom Hooks") {
                      router.push({ pathname: "/CounterView" });
                    } else if (item == "useState Hooks") {
                      router.push({ pathname: "/ViewUseState" });
                    } else if (item == "useEffect Hooks") {
                      router.push({ pathname: "/ViewUseEffect" });
                    } else if (item == "useRef Hooks") {
                      router.push({ pathname: "/viewUseRef" });
                    }
                  }}
                >
                  <Text style={{ padding: 15, paddingLeft: 20 }}>{item}</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}
