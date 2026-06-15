import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Routes from './navigation/Routes';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import { LocalStorage } from './untils/LocalStorage';
import { saveUsersData } from './redux/reducers/authSlice';
import { useEffect } from 'react';
const { dispatch } = store;

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const getUserDataFromStore = () => {
    const token = LocalStorage.getString('token');
    if (token) {
      dispatch(
        saveUsersData({
          userData: { name: 'Raj', Gender: 'Male', Country: 'India' },
          isLogin: true,
        }),
      );
    }
  };

  useEffect(() => {
    getUserDataFromStore();
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
