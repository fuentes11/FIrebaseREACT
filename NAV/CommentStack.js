import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommentsG from '../Screens/CommentsG';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Screens/Home';
import AddComments from '../Screens/AddComments';
import Detailmeal from '../Screens/Detailmeal';

const Stack= createStackNavigator();
export default function CommentStack(){
    return(
    <Stack.Navigator>
    
    <Stack.Screen name="CommentsG" component={CommentsG}
    options={{title:'Comments'}}/>

    <Stack.Screen name="Home" component={Home}
    options={{title:'Home'}}/>

    <Stack.Screen name="AddComments" component={AddComments}
    options={{title:'AddComments'}}/>

    <Stack.Screen name="Detailmeal" component={Detailmeal}
    options={{title:'Detailmeal'}}/>
    
    </Stack.Navigator>
    );
    }