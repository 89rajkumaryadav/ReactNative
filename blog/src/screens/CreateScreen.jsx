import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Inline default export forces the compiler to treat this as the primary export
export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text>Create Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
