import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import CommentsG from './Screens/CommentsG';
import Home from './Screens/Home';
import AddCommentsd from './Screens/AddComments';
import Detailmeal from './Screens/Detailmeal';
import Navigation from './NAV/Navigation';
import Index from './Screens/Index';
import LoginController from './NAV/LoginController'




function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />
      <Stack.Screen
      name='AddComments'
      component={AddCommentsd}
      options={{ title: "AddCommentsd" }}
      />
      <Stack.Screen
        name="CommentsG"
        component={CommentsG}
        options={{ title: "Comments" }}
      />
      
     
      <Stack.Screen
        name="Detailmeal"
        component={Detailmeal}
        options={{ title: "Detailmeal" }}
      />
       
      <Stack.Screen
        name="Index"
        component={Index}
        options={{ title: "Index" }}
      />
      
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
       <LoginController/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
