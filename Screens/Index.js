import * as React from 'react';
import {View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../NAV/Navigation';
export default function Index(){
 return(
 <NavigationContainer>
 <Navigation/>
 </NavigationContainer>
 );
}