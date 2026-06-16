import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useCounter from "../hooks/useCounter";

const CounterView = () => {
  const { count, handleIncrement, handleDecrement } = useCounter();
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button title="Increment(+)" onPress={() => handleIncrement(2)} />

        <View style={{ height: 10 }} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            borderColor: "red",
            borderWidth: 1,
            padding: 10,
            backgroundColor: "grey",
          }}
          onPress={() => handleDecrement(2)}
        >
          <Text style={{ fontSize: 16 }}>Decrement(-)</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 30 }} />
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{count}</Text>
    </>
  );
};

export default CounterView;

const styles = StyleSheet.create({});
