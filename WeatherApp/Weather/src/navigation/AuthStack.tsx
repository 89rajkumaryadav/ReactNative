import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome/Welcome';
import { HeaderShownContext } from '@react-navigation/elements';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export type AuthStackParamList = {
  Welcome: undefined;
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthStack;
