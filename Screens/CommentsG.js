import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { MaterialIcons,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';

import { collection,getDocs,doc, setDoc } from "firebase/firestore";
import {firebase} from '../BBDD/bd';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-elements/dist/helpers';

export default function CommentsG (props) {
  const {navigation} = props;

    //GET
    const [dataa , setDataa]= useState([])
    const [addData, setAddData]=useState('');
    const todo = firebase.firestore().collection('Comments');
    useEffect(() => {
       todo.onSnapshot((querySnapshot) => {
          const dataa = [];
          querySnapshot.docs.forEach((doc) => {
            const { Comments } = doc.data();
            dataa.push({
              id: doc.id,
              Comments
            });
          });
          setDataa(dataa);
        });
      }, []);
    
      return (
        <SafeAreaView 
        style={styles.bck}>
          
          <Button
        style={styles.bckmeals}
        onPress={() => {
          props.navigation.navigate("AddComments");
        }}
        title="Create new comment"
      />
      
        <ScrollView style={{marginBottom:100}}>
        
          {dataa.map((send) => {
            
            return (
              
              <ListItem
              containerStyle={styles.bckmeals}
                key={send.id}
                bottomDivider
                onPress={() => {
                  props.navigation.navigate("DetailComments", {
                    sendId: send.id,
                  });
                }}
                
              >
                <MaterialCommunityIcons name="message-arrow-right" size={30} color="black" />
                <ListItem.Content 
                style={styles.commentss}>
                  
                  <ListItem.Title 
                  >{send.Comments}</ListItem.Title>

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
        flex: 1,
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
        width:100,
        height:100,
    },
    input:{
        backgroundColor:'#f0f0f0',
        borderRadius:10,
        marginBottom:15,
        padding:10,
    },
    commentss:{
      widht: 100,
      backgroung:'#E8E8E8',
      padding: 6,
      height: 40,
      borderRadius: 6 ,
      marginTop: 13
    },
    bck:{
     
      backgroundColor: '#113361',
      
  },
  bckmeals:{
      backgroundColor: '#F2CF66',
      margin:15,
      justifyContent: 'center',
      
  }
  });
