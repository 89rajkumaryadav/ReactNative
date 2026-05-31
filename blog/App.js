import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreens from './src/screens/IndexScreens';
import ShowScreen from './src/screens/ShowScreen';
import { Provider } from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';

const Stack = createStackNavigator()


const  App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={IndexScreens} options={{title:'Blogs'}} />
      <Stack.Screen name='ShowScreen' component={ShowScreen} options={{title:'Show Screen'}} />
      <Stack.Screen name='CreateScreen' component={CreateScreen} options={{title: 'Create Screen'}} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default () => {
  return ( <Provider><App/></Provider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
