import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
//
//
//
const Routes = () => {
  const userData = useSelector(state => state.auth);
  //console.log(userData?.isLogin, 'userData');
  const isToken = userData?.isLogin;
  return (
    <NavigationContainer>
      {isToken ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
