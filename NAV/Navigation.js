import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealStack from './MealStack';
import CommentStack from './CommentStack';
import FilterNavigation from './FilterNavigation';
const Tab = createBottomTabNavigator();

export default function Navigation(){
  return (

        <Tab.Navigator screenOptions={{
          tabBarStyle: {
            backgroundColor: '#113361',
          },
          
        }}>
        <Tab.Screen name= "Meals" component={MealStack} options={{ title:'Meals ',headerShown:false, 
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="fastfood" color={'#F2CF66'} size={size} />
      ), }}/>
        <Tab.Screen name= "Comments" component={CommentStack} options={{ title:'Comments',headerShown:false ,
        tabBarIcon: ({ color, size }) => (
        <FontAwesome name="comments" color={'#F2CF66'} size={size} />
      ), }}/>

      <Tab.Screen name= "Filter" component={FilterNavigation} options={{ title:'Filter',headerShown:false ,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="search" size={24} color="#F2CF66" />
      ), }}/>
        </Tab.Navigator>
    
  );
}
