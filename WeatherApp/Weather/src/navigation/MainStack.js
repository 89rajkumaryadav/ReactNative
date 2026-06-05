import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import BottamTabs from './BottamTabs';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen'
import SearchScreen from '../screens/SearchScreen/SearchScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const MainStack = () => {
  return ( 
    
   
         <Stack.Navigator screenOptions={{headerShown:false}}>
           <Stack.Screen name="BottamTabs" component={BottamTabs} />
           <Stack.Screen name="SearchScreen" component={SearchScreen} />
           <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

         </Stack.Navigator>
     
   
   
  )
}

export default MainStack

const styles = StyleSheet.create({})





