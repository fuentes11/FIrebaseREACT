import { View, Text,SafeAreaView,StyleSheet, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import { collection,getDocs } from "firebase/firestore";
import {firebase} from '../BBDD/bd';

//meals
export default function Home(props) {
    const {navigation} = props;
    const [dataaa , setDataaa]= useState([])
    const todo = firebase.firestore().collection('Meals');
    
    useEffect(()=>{
            todo.onSnapshot((querySnapshot) => {
                const dataaa = [];
                querySnapshot.docs.forEach((doc) => {
                  const { name,details,price,image } = doc.data();
                  dataaa.push({
                    id: doc.id,
                    name,
                    details,
                    price,
                    image
                  });
                });
                setDataaa(dataaa);
              });
    },
    []);
  return (
    
    <SafeAreaView style={styles.bck}>
   <ScrollView style={{marginBottom:20}}>
        
        {dataaa.map((send) => {
          
          return (
            
            <ListItem
            containerStyle={{backgroundColor:"#F2CF66",borderRadius:21}}
            style={styles.container}
              key={send.id}
              bottomDivider
              onPress={() => {
                props.navigation.navigate("DetailMeal", {
                  sendId: send.id,
                });
              }}
            >
             <Avatar style={styles.image} rounded source={{uri: send.image}}></Avatar> 
              
              <ListItem.Content >
                <ListItem.Title>{send.name}</ListItem.Title>
                <ListItem.Subtitle>{send.details}</ListItem.Subtitle>
                <ListItem.Subtitle>{send.price}</ListItem.Subtitle>              
              </ListItem.Content>
            </ListItem>
          );
        })}
      </ScrollView>
    
    </SafeAreaView>
  );
  }


  const styles = StyleSheet.create({
    container: {
      
       flex:1,
       marginLeft:10,
       marginRight:10,
       marginTop:10,
        justifyContent: 'center',

    },
    text:{
        textAlign:'center',
        fontSize:42,
    },
    tittle:{
        fontSize:18
    },
    subtext:{
        fontSize:13,
        color:'#808080',
    },
    image:{
        borderWidth: 4,
        borderRadius:21,
        borderColor: "#113361",
        justifyContent:'center',
        width:100,
        height:100,
    },
    bck:{
      

        backgroundColor: '#113361',
        
    },
  });