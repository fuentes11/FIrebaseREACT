import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealStack from './MealStack';
import CommentStack from './CommentStack';
const Tab = createBottomTabNavigator();

export default function Navigation(){
  return (

        <Tab.Navigator>
        <Tab.Screen name= "Meals" component={MealStack} options={{ title:'Meals ',headerShown:false,
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="fastfood" color={color} size={size} />
      ), }}/>
        <Tab.Screen name= "Comments" component={CommentStack} options={{ title:'Comments',headerShown:false ,
        tabBarIcon: ({ color, size }) => (
        <FontAwesome name="comments" color={color} size={size} />
      ), }}/>
        
        </Tab.Navigator>
    
  );
}
