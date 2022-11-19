import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Salir from '../Screens/Salir';
import CommentStack from '../Screens/CommentsG';
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';
const Stack= createStackNavigator();


export default function SalirStack(props){
  const {navigation} = props;
    return(
    <Stack.Navigator 
    >
    
    <Stack.Screen name="Salir" component={Salir}
      options={{ title:'Salir'  
    }}/>
   
    </Stack.Navigator>

    );
    }