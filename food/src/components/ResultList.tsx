import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ResturantRow from './ResturantRow'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ResultList = ({title, results}) => {
  return (
    <View style = {styles.container}>
        <Text style = {styles.title}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={ item => item.id}
      renderItem = {({item}) => {
      return(<TouchableOpacity onPress={() => {
        
      }}>
         <ResturantRow item={item} />
      </TouchableOpacity>) 
      } }
      />
    </View>
  )
}

export default ResultList

const styles = StyleSheet.create({
    container: {
        marginBottom:10
    },
    title: {
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15
    }
})