import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, {useContext} from 'react'
import { Context } from '../context/BlogContext'

const IndexScreens = () => {
  const {state, addBlogPosts} = useContext(Context)
  //console.log(value)
  return (
    <>
    <Button title='Add Posts' onPress={addBlogPosts}/>
      <FlatList
      data={state}
      keyExtractor={(item) => item.title}
      renderItem = {({item}) =>  blogRow(item) }
      />
    </>
  )
}

const blogRow = (item) => {
  return(<Text>{item.title}</Text>)
}

export default IndexScreens

const styles = StyleSheet.create({
    
})