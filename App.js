/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Colors from './js/Themes/Colors.json';
import {Provider} from 'react-redux';
import store from './js/store';

import SplashScreen from './js/screens/Splash';

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Salut</Text>
      </View>
    );
  }
}

const Store = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Store;

const MainScreen = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
      screen: NotificationsScreen,
    },
    Transactions: {
      screen: TransactionsScreen,
    },
    Transaction: {
      screen: TransactionScreen,
    },
    Splash: {
      screen: SplashScreen,
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.BLUE_DARK,
      },
    },
    initialRouteName: 'Splash',
  },
);

const AppContainer = createAppContainer(MainScreen);
