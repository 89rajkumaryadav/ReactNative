import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ViewUseState = () => {
  // Direct update vs Functional updates of state
  //(1) Use of useState normal
  const [count, setCount] = useState(0);

  //(2) Stail state issue in react: what if I am updating state multiple times. It will be only update once.

  //(3) State with object
  const [stateObj, setStateObj] = useState({ count: 0, clicks: 0 });

  //(4) State with Array
  const [stateArr, setStateArr] = useState<string[]>([]);

  //(5) Update state using function
  const expensive = () => {
    console.log("Expensive");
    return 10;
  };

  //const [num, setNum] = useState(expensive()); // It will call expensive() every time when it updates
  const [num, setNum] = useState(() => expensive()); // Lazy function loading call only once

  /*(6) Update nested state */
  const [user, setUser] = useState({
    firstName: "Rajkumar",
    lastName: "Yadav",
    address: { city: "Azamgarh", country: "India" },
  });

  return (
    <View style={{ alignItems: "center" }}>
      <Button
        title="Update count state"
        onPress={() => {
          //(1)
          setCount(count + 1);
        }}
      />
      {/*(2) Stail state issue */}
      <Button
        title="Stail state issue"
        onPress={() => {
          // Count should increase by two but it failed
          /* setCount(count + 1);
          setCount(count + 1); */

          // React state stail issue we can fix by using call back function inside setState function.
          // Example:

          setCount((pre) => pre + 1);
          setCount((pre) => pre + 1);
        }}
      />

      <Text>Count State: {count}</Text>

      {/*(3) Stail state issue */}
      <Button
        title="Updatye object type state"
        onPress={() => {
          setStateObj({
            ...stateObj,
            count: stateObj.count + 1,
            clicks: stateObj.clicks + 2,
          });
        }}
      />
      <Text>
        Object type State Count: {stateObj.count} Clicks: {stateObj.clicks}
      </Text>

      {/*(4) Update array state */}
      <Button
        title="Update array state"
        onPress={() => {
          setStateArr([...stateArr, `${stateArr.length + 1}`]);
        }}
      />
      <Text>Array object state: {stateArr}</Text>

      {/*(5) useState init using function */}
      <Button
        title="Update state using function"
        onPress={() => {
          setNum(num + 1);
        }}
      />
      <Text>Function state: {num}</Text>

      {/*(6) Update nested state */}
      <Button
        title="Update nested state"
        onPress={() => {
          setUser({
            ...user,
            firstName: "Gopi",
            address: { ...user.address, city: "Kolkata" },
          });
        }}
      />
      <Text>
        Nested state : Name: {user.firstName} {user.lastName} Address:{" "}
        {user.address.city}, {user.address.country}
      </Text>

      {/*(7) State updater function with closures */}
      <Button title="State updater function with closures" onPress={() => {}} />
      <Text>State updater function with closures:</Text>
    </View>
  );
};

export default ViewUseState;

const styles = StyleSheet.create({});
