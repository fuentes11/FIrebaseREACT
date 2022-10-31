import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, ListItem } from 'react-native-elements';

import { collection,getDocs,doc, setDoc } from "firebase/firestore";
import {firebase} from '../BBDD/bd';

export default function AddComments (props) {
  const {navigation} = props;

    //GET
    const [dataa , setDataa]= useState([])
    const [addData, setAddData]=useState('');
  const todo = firebase.firestore().collection('Comments');

    
    function refreshPage() {
        window.location.reload(false);
      }
   

 function addField(){ 
    
    if(addData && addData.length>0){
    
    const postingdata ={
        Comments:addData
    };
    todo
    .add(postingdata).then(()=>{
        setAddData('');
        Keyboard.dismiss();
        refreshPage()
    }).catch((error)=>{
        Alert("error")
    })
    props.navigation.navigate("CommentsG");

}
}
return (

<View style={styles.inputGroup}>
    
     <View style={{marginTop:25}}>
     <Text style={{fontSize:25}}>Leave your comments </Text>
        <TextInput
        style={{height: 40}}
        placeholder='write here'
        defaultValue={addData}
        onChangeText={newText => setAddData(newText)}
        
        autoCapitalize={false}
        />
       
        <Button
        style={{margin:10}}
        title='Post your comments :D'
        onPress={addField}

    />
    </View>

    
</View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    inputGroup: {
      color:"black",
      flex: 1,
      padding: 8,
      margin: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
  });