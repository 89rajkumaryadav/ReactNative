import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import {Feather} from '@expo/vector-icons'
import { Context } from '../context/BlogContext'

const IndexScreens = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context)
  //console.log(value)
  return (
    <>
    <Button title='Add Posts' onPress={addBlogPost}/>
      <FlatList
      data={state}
      keyExtractor={(item) => item.title}
      renderItem = {({item}) =>  blogRow(item, deleteBlogPost, navigation) }
      />
    </>
  )
}

const blogRow = (item,deleteBlogPost, navigation) => {
  return(
    <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', {id: item.id})}>
    <View style = {styles.row}>
    <Text style = {styles.title}>{item.title} - {item.id}</Text>
    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
    <Feather name='trash' style = {styles.icons}/>
    </TouchableOpacity>
    </View>
    </TouchableOpacity>
  )
}

export default IndexScreens

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderTopWidth: 1,
      borderColor: 'gray'
    },
    title: { fontSize: 18},
    icons: { fontSize: 24}
})