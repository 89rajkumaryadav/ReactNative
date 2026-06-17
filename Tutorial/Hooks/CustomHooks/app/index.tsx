import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const arrData = ["custom Hooks", "useState Hooks", 3];
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
