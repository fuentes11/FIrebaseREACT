import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import CommentsG from './Screens/CommentsG';
import Home from './Screens/Home';
import AddCommentsd from './Screens/AddComments';
import DetailMeal from './Screens/DetailMeal';
import DetailComments from './Screens/DetailComments';
import Navigation from './NAV/Navigation';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Index from './Screens/Index';
import LoginController from './NAV/LoginController'
import Cart from './Screens/Cart';
import FilterResult from './Screens/FilterResult';
import FilterList from './Screens/FilterList';

function TabBarIcon({name, color}){
  return(
      <AntDesign size={30} style={{marginBottom: -3}} name={name} color={color}/>
      
  );
}


function MyStack(props) {
  const {navigation} = props;

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#113361",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
    >
      <Stack.Screen
        name="Navigation"
        component={Navigation}
        options={{ title: "",headerShown:false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home",  headerShown: false}}/>
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
        name="Index"
        component={Index}
        options={{ title: "Index" }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Cart"}}
      />
      <Stack.Screen
        name="DetailMeal"
        component={DetailMeal}
        options={{ title: "DetailMeal",headerStyle: {
          backgroundColor: '#113361',
          
        },headerTintColor: '#ffff',
        headerRight: () => (
          <AntDesign name="shoppingcart" size={40} color="#ffff" onPress={() => {props.navigation.navigate("Cart")}}/>
          ),}}
      />

      <Stack.Screen
        name="DetailComments"
        component={DetailComments}
        options={{ title: "DetailComments" , headerShown: false}}/>
      
       
      
       <Stack.Screen
        name="FilterResult"
        component={FilterResult}
        options={{ title: "FilterResult" }}
      />
      <Stack.Screen
        name="FilterList"
        component={FilterList}
        options={{ title: "FilterList" }}
      />
      
      
    </Stack.Navigator>
  );
};
export default function App(props) {

  return (
    <NavigationContainer>
       
       <MyStack/>
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
