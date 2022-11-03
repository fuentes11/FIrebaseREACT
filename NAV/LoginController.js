//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import screens(Importación de pantallas a utilizar)
import Login from '../Screens/Login';
import Home from '../NAV/Navigation';
import Register from '../Screens/Register';


//NativeStackNavigator object creation(Creación de elemento tipo StackNavigator)
const Stack = createNativeStackNavigator();

//Controller to the navigation between client and detail screen(Controlador para la navegación entre las pantallas Clientes y de Detalles)
function LoginController() {
  return (
      <Stack.Navigator initialRouteName='Login' 
      screenOptions={{
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor: '#394263',
        },
      }}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default LoginController;

