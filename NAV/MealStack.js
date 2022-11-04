import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import CommentStack from '../Screens/CommentsG';
import { Ionicons } from '@expo/vector-icons';

const Stack= createStackNavigator();
export default function MealStack(){
    return(
    <Stack.Navigator 
    >
    
    <Stack.Screen name="Home" component={Home}
    options={{title:'Home',headerStyle: {
        backgroundColor: '#113361',
      },headerTintColor: '#ffff'}}/>
    <Stack.Screen name="CommentsG" component={CommentStack}
    options={{title:'Comments',headerStyle: {
        backgroundColor: '#113361',
      },}}/>
    </Stack.Navigator>
    );
    }