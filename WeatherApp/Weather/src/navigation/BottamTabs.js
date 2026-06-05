import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import Home from '../screens/Home/Home'
import MyCityScreen from '../screens/MyCityScreen/MyCityScreen'
import MapScreen from '../screens/MapScreen/MapScreen'
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { moderateScale } from "react-native-core-responsive-screen";
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'


const Tab = createBottomTabNavigator();

const BottamTabs = () => {
  return (
   <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle:{backgroundColor:colors.bottamTabsColor}}}>
      <Tab.Screen name="Home" 
      options={{tabBarLabel:"",
        tabBarIcon:({focused}) =>(

            <Image 
            tintColor={focused ? colors.white : colors.textGreyB} 
            style = {styles.imageStyle} source = {imagePath.rainIcon}/>
        )
       }}
      component={Home} />
      <Tab.Screen name="MyCityScreen" component={MyCityScreen} 
       options={{tabBarLabel:"",
        tabBarIcon:({focused}) =>(
            <Image  
            tintColor={focused ? colors.white : colors.textGreyB} 
            style = {styles.imageStyle}source = {imagePath.optionsList}/>
        )
       }}
      />
      <Tab.Screen name="MapScreen" component={MapScreen} 
       options={{tabBarLabel:"",
        tabBarIcon:({focused}) =>(
            <Image 
            tintColor={focused ? colors.white : colors.textGreyB} 
            style = {styles.imageStyle}source = {imagePath.map}/>
        )
       }}
       />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} 
       options={{tabBarLabel:"",
        tabBarIcon:({focused}) =>(
            <Image  
            tintColor={focused ? colors.white : colors.textGreyB} 
            style = {styles.imageStyle}source = {imagePath.settings}/>
        )
       }}
       />

    </Tab.Navigator>
  )
} 


export default BottamTabs

const styles = StyleSheet.create({
  imageStyle: {
    width:moderateScale(25),
    height:moderateScale(25),
    marginTop:moderateScale(10)
  }
});