//import elements(Importación de elementos básicos de react-native)
import * as React from 'react';
import { ScrollView ,StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity,  } from 'react-native';
import { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import Ionicons from 'react-native-vector-icons/Ionicons';//import icons(Importación de iconos)
import { RFPercentage } from 'react-native-responsive-fontsize';//library to get responsive fonts(Librería para tener un tamaño responsivo en el texto)
import {isEmpty} from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';
import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';



//constante para iniciar el spinner y mostar la carga de los datos




function Login  ({navigation})  {
const auth = getAuth()
  const [showhide, setShowhide] = useState(true);//Variable to protect the password(variable para mostrar y esconder la contraseña)
  const [loading, setLoading] = useState(false);//variable for loading spinner(variable para el spinner de loading)
  
  const [email, setEmail] = useState('');//Variable for get the input user(variable para capturar el input de usuario)
  validateEmail = (email) => {
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return re.test(email);
    };
  const [password, setPassword] = useState('');//Variable for get the input password(variable para capturar el input de contraseña)
  validatePassword = (password) => {
    var res = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;  
    return re.test(password);
  };
  const handleSignIn=(userCredential)=>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
        alert('Signed in')
        const user = userCredential.user
        navigation.navigate('Main')
    }).catch(e =>{
      alert(e)
    })
  }

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  return( 
  <ScrollView style={styles.scroll_container}>
        <View style={styles.container}>  
            <Spinner
              //visibility of Overlay Loading Spinner
              visible={loading}
              //Text with the Spinner
              textContent={'Loading...'}
              //Text style of the Spinner Text
              textStyle={{color:'#FFFFFF',}}
            />              
            <Image source={require('../assets/LolOlgo.png')} style={{borderRadius:15,height: 200, width: 230, margin:0,}} />
            <View style={{width:'80%',}}>
              <TextInput style={styles.inputTxt} placeholder='Correo electronico' onChangeText={(text) => setEmail(text)}  />
            </View>
            <View style={styles.passwordview}>
              <TouchableOpacity onPress={() =>{
                if (showhide) {setShowhide(false)}else{setShowhide(true)}
                } } style={{backgroundColor:'#72789A',padding:5,borderRadius:100,}}><Ionicons name="eye" color={'black'} size={25} />
              </TouchableOpacity>
              <TextInput style={styles.inputTxt2} placeholder='Contraseña' onChangeText={(text) => setPassword(text)} defaultValue={password} secureTextEntry={showhide}/>
      
            </View>  
            <TouchableOpacity onPress={() =>{
                                startLoading();
                                navigation.navigate('Register');
                } } >
                <Text style={styles.txt}>¿No tienes cuenta?¡Registrate!</Text>
              </TouchableOpacity>
            <Button  title='Login' color={'#F2CF66'} onPress={handleSignIn}/>
        </View>
      </ScrollView>
    
    );}
 

  


          
//Login Screen with user's email and password(Pantalla de login con email y contraseñas de los usuarios)

const styles = StyleSheet.create({
    scroll_container: {
        backgroundColor: '#113361',
    },
    container: {
      flex: 1,
      marginTop:'20%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:'10%',
    },
    inputTxt: {
      padding: 5,
      marginTop: '30%',
      width:'100%',
      height:'18%',
      backgroundColor:'#72789A',
      borderRadius:10,
      textAlign:'center',
      fontSize:RFPercentage(2.5),
    },
    inputTxt2: {
      padding: 5,
      width:'90%',
      textAlign:'center',
      marginRight:5,
      fontSize:RFPercentage(2.5),
    },
    passwordview:{
      flexDirection: 'row',
      width:'80%',
      marginBottom:'8%',
      backgroundColor:'#72789A', 
      borderRadius:10,
      height:'8%',
    },
    txt:{
      fontSize:RFPercentage(2.5),
      color:'#F2CF66',
      padding:5,
      flexDirection: 'row',
    },
  });
export default Login;