import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import CommentStack from '../Screens/CommentsG';
import DetailMeal from '../Screens/Detailmeal';
import Cart from '../Screens/Cart';
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';
const Stack= createStackNavigator();


export default function MealStack(props){
  const {navigation} = props;
    return(
    <Stack.Navigator 
    >
    
    <Stack.Screen name="Home" component={Home}
      options={{ title:'Home',headerStyle: {
        backgroundColor: '#113361',
        
      },headerTintColor: '#ffff',
      headerRight: () => (
        <AntDesign name="shoppingcart" size={40} color="#ffff" onPress={() => {props.navigation.navigate("Cart")}}/>
        ),
      
        
    }}/>
   
    </Stack.Navigator>

    );
    }