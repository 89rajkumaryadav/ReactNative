import React, { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const viewUseRef = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  const numRef = useRef(0);
  // Problem: Need to count render count
  /* useEffect(() => {
    setCount((pre) => pre + 1); // It can create infinite loop, causing rerendring every time
  });*/

  useEffect(() => {
    numRef.current = numRef.current + 1; // Updating value using useRef cam not cause reRender
  });

  // using useRef we can access DOM element and can manupulate it as well.
  const [name, setName] = useState("Raj");
  const inputRef = useRef<TextInput>(null);

  return (
    <View style={{ alignItems: "center" }}>
      <Button title="+1" onPress={() => setValue((pre) => pre + 1)} />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>{value}</Text>
      <Button title="-1" onPress={() => setValue((pre) => pre - 1)} />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Render Count:{count}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Render CountRef:{numRef.current}
      </Text>

      {/*Access DOM element using useRef */}
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Write something"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button
        title="Reset"
        onPress={() => {
          // setName("");
          //inputRef.current?.focus();
          inputRef.current?.clear(); // It can clear text without rerender
        }}
      />
    </View>
  );
};

export default viewUseRef;

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: "50%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
    backgroundColor: "#fff",
  },
});
