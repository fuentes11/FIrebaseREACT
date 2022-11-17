import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilterList from '../Screens/FilterList';
import FilterResult from '../Screens/FilterResult';
const Stack = createNativeStackNavigator();


export default function FilterNavigation() {

  return (
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name='FilterList' component={FilterList} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});