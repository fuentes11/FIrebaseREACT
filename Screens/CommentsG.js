import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, ListItem } from 'react-native-elements';

import { collection,getDocs,doc, setDoc } from "firebase/firestore";
import {firebase} from '../BBDD/bd';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        <SafeAreaView>
          <Button
        onPress={() => {
          props.navigation.navigate("AddComments");
        }}
        title="Create new comment"
      />
        <ScrollView>
        
          {dataa.map((send) => {
            
            return (
              
              <ListItem
                key={send.id}
                bottomDivider
                onPress={() => {
                  props.navigation.navigate("Detailmeal", {
                    sendId: send.id,
                  });
                }}
              >
                
                <ListItem.Chevron />
                <ListItem.Content>
                  <ListItem.Title>{send.Comments}</ListItem.Title>

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
        display:'block',
        width:100,
        height:100,
    },
    input:{
        backgroundColor:'#f0f0f0',
        borderRadius:10,
        marginBottom:15,
        padding:10,
    }
  });
