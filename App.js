import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screen/HomeScreen';
import GeoScreen from './screen/GeoScreen';
import LoginScreen from './screen/LoginScreen';
import ListScreen from './screen/ListScreen';


function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }, Geo: {
    screen: GeoScreen
  }, Login: {
    screen: LoginScreen
  }, List: {
    screen: ListScreen
  }
});

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
