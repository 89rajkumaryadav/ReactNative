import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
const Routes = () => {
    const isToken = true
  return (
    <NavigationContainer>
        {isToken ? <MainStack/> : <AuthStack/> }
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})