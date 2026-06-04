import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../styles/colors'

interface WrapperContainerProps {
    children: ReactNode
}
const WrapperContainer = ({children}:WrapperContainerProps) => {
  return (
    <SafeAreaView style = {styles.mainStyle}>
    <StatusBar barStyle={'light-content'} backgroundColor={colors.backgroundAppColor} />
      <View style = {styles.mainStyle}>{children}</View>
    </SafeAreaView>
  )
}

export default WrapperContainer

const styles = StyleSheet.create({
    mainStyle: {
        flex:1,
        backgroundColor: colors.backgroundAppColor
    },
    viewStyle: {
        flex:1,
        backgroundColor:colors.backgroundAppColor,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }
})