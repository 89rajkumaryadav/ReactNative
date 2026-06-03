import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../screens/Home/Home'
import MyCityScreen from '../screens/MyCityScreen/MyCityScreen'
import MapScreen from '../screens/MapScreen/MapScreen'
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const Tab = createBottomTabNavigator();

const BottamTabs = () => {
  return (
   <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyCityScreen" component={MyCityScreen} />
      <Tab.Screen name="MapScreen" component={MapScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />

    </Tab.Navigator>
  )
} 


export default BottamTabs

const styles = StyleSheet.create({})