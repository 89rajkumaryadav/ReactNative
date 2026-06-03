import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome/Welcome'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
  )
}

export default AuthStack

