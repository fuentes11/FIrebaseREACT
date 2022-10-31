import { View, Text,SafeAreaView,StyleSheet, FlatList, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, ListItem } from 'react-native-elements';

import { collection,getDocs } from "firebase/firestore";
import {firebase} from '../BBDD/bd';


export default function Home(props) {
    const {navigation} = props;
    const [data , setData]= useState()
    const todo = firebase.firestore().collection('Meals');
    async function loadData(){
        try{
            const Meals = await getDocs(todo);
            setData(Meals.docs);
        }catch(e){
            
            Alert("error reinicie la app");
        }

    }

    useEffect(()=>{
        loadData();
    },
    []);
    function renderItem({item}){
        return(
        
            
            
            <View style={styles.container}>
            <SafeAreaView>
            <ScrollView>
            <ListItem >
            <Avatar style={styles.image} rounded source={{uri: item.data().image}}></Avatar>
              <ListItem.Content >
                <ListItem.Title>{item.data().name}</ListItem.Title>
                <ListItem.Subtitle>{item.data().details}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.data().price}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            </ScrollView>
            </SafeAreaView>
            </View>
            
            
            
        );
    }
    

    
  return (
    
    <SafeAreaView>
        
   <View>
    <Text style={styles.text}>MEALS </Text>
    </View>
    <FlatList 
    nestedScrollEnabled 
    data ={data}
    renderItem ={renderItem}
    keyExtractor = {item=>item.id}/>
    
    </SafeAreaView>
    
    
  );
    

  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:20,
        marginRight:20,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    text:{
        textAlign:'center',
        fontSize:42,
    },
    image:{
        justifyContent:'center',
        display:'block',
        width:100,
        height:100,
    }
  });

