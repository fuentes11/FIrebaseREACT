import * as React from 'react';
import { ScrollView ,StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, Alert,  } from 'react-native';
import { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import Ionicons from 'react-native-vector-icons/Ionicons';//import icons(Importación de iconos)
import { RFPercentage } from 'react-native-responsive-fontsize';//library to get responsive fonts(Librería para tener un tamaño responsivo en el texto)
import {isEmpty} from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';
import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {firebase} from '../BBDD/bd'
import Navigation from '../NAV/Navigation';

const Salir=({navigation})=>{
  const auth = getAuth()
    const SignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={SignOut()}>
        <Text>cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    cardProducto: {
        width: 400,
        height: 122,
        marginTop: 40,
        backgroundColor: '#F2CF66',
        borderRadius:21,
        borderColor: "#113361",
        marginLeft: 9
      },
      card: {
        height: 140,
        backgroundColor: '#F2CF66',
        borderRadius:21,
        borderColor: "#113361",
        justifyContent:'center',
      },
      imagen: {
        width: 71,
        height: 78,
        borderWidth: 4,
        borderRadius:21,
        borderColor: "#113361",
        justifyContent:'center',
        display:'block',
      },
      titulo: {
        color: "#121212",
        marginLeft: 5,
        fontWeight:"bold"
      },
      descripcion: {
        color: "#121212",
        marginTop: 2
      },
      precio: {
        color: "#121212",
        marginTop: 4,
      },
      tituloColumn: {
        width: 130
      },
      agregar: {
        color: "#121212",
        marginTop: 13,
        marginLeft: 22
      },
      tituloColumnColumn: {
        width: 200,
        marginLeft: 41
      },
      imagenRow: {
        height: 88,
        flexDirection: "row",
        marginTop: 21,
        marginLeft: 12,
        marginRight: 124
      },
      bck:{
        width:'100%',
        height:'100%',
         backgroundColor: '#113361',
     },
     text:{
      alignSelf:'flex-end',
      alignContent:'center',
      justifyContent:'flex-end'
      
    },
     Button:{
      marginTop:50,
      borderWidth: 4,
      borderRadius:21,
      borderColor: "#113361",
      justifyContent:'center',
      alignItems:'center',
      width:200,
      backgroundColor:'#F2CF66',
      height:50,
      alignSelf: 'center',
     }
    
    });
    export default Salir;