import React,{Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './components/bottomNavigator';

export default class App extends Component() {
  render(){
  return (
   <BottomTabNavigator/>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
