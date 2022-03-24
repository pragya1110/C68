import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TScreen from '../Screens/transaction';
import Search from '../Screens/search';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab= createBottomTabNavigator();

export default class BottomTabNavigator extends Component () {
    render(){
    return (
   <NavigationContainer>
       <Tab.Navigator>
           <Tab.Screen name="transaction" component={TScreen}/>
           <Tab.Screen name="search" component={Search}/>
       </Tab.Navigator>
   </NavigationContainer>
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
  text:{
   color:"#ffff",
   fontSize:30,
  },
});