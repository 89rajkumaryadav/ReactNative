import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ViewUseEffect = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1000);
  const [cleanupNum, setCleanupNum] = useState(0);
  //useEffect without dependencies calls always on rerender
  useEffect(() => {
    console.log("It will always calls, whenever state renders.");
  });

  //useEffect with empity array dependencies calls only once
  useEffect(() => {
    console.log("It will call only once");
  }, []);

  // useEffect with dependencies calls only if particular element changes
  useEffect(() => {
    console.log("It will call on Decrement num only");
  }, [num]);

  // Example of cleanup function in use effect: performance optimization, here need to clean setInterval
  // otherwise it will always call itself.
  useEffect(() => {
    const interval = setInterval(() => {
      setCleanupNum((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Text>Count:{count}</Text>
      <Button title="Decrement Number" onPress={() => setNum(num - 1)} />
      <Text>Num:{num}</Text>
      <Text>{cleanupNum}</Text>
    </View>
  );
};

export default ViewUseEffect;

const styles = StyleSheet.create({});
