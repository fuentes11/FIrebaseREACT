import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommentsG from '../Screens/CommentsG';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Screens/Home';
import AddComments from '../Screens/AddComments';
import DetailComments from '../Screens/DetailComments';

const Stack= createStackNavigator();
export default function CommentStack(){
    return(
    <Stack.Navigator>
    
    <Stack.Screen name="CommentsG" component={CommentsG}
    options={{title:'Comments',    headerLeft: null
    ,headerStyle: {
        backgroundColor: '#113361',
      },headerTintColor: '#ffff'}}/>

    
    </Stack.Navigator>
    );
    }