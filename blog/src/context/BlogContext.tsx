import { View, Text } from 'react-native'
import React from 'react'

const BlogContext = React.createContext({})

export const BlogProvider = ({children}) => {
    const value = {}
  return (
    <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
  )
}

