import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShopScreen from './screens/ShopScreen';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <ShopScreen /> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
