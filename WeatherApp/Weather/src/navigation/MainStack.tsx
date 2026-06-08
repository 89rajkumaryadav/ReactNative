import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import BottamTabs from './BottamTabs';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AirDataItem } from '../constants/ObjectTypes';

export type MainStackParamList = {
  BottamTabs: undefined;
  SearchScreen: undefined;
  DetailsScreen: { airData: AirDataItem[] };
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottamTabs" component={BottamTabs} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
