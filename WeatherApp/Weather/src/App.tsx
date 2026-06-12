import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Routes from './navigation/Routes'



function App() { 
  const isDarkMode = useColorScheme() === 'dark';

  return ( <Routes/>
   );
}



export default App;
