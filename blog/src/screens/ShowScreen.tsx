import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShowScreen = ({route}) => {
   console.log(route.params.id)
  return (
    <View>
      <Text>ShowScreen IDS </Text>
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({})