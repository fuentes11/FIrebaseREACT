import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView,ActivityIndicator,Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { collection,getDocs,doc, setDoc } from "firebase/firestore";
import {firebase} from '../BBDD/bd';


export default function DetailMeal(props) {
  const {navigation} = props;
    
    const todo = firebase.firestore().collection('Meals');
    const initialState = {
      id: "",
      name: "",
      details: "",
      price: "",
      image:""
    };
  
    const [send, setSend] = useState(initialState);
    const [loading, setLoading] = useState(true);
  
    const handleTextChange = (value, prop) => {
      setSend({ ...send, [prop]: value });
    };
  
    const getMealById = async (id) => {
      const dbRef = todo.doc(id);
      const doc = await dbRef.get();
      const send = doc.data();
      setSend({ ...send, id: doc.id });
      setLoading(false);
    };

  /**
    const deleteMeal = async () => {
      setLoading(true)
      const dbRef = todo.doc(props.route.params.sendId);
      await dbRef.delete();
      setLoading(false)
      props.navigation.navigate("Home");
    };
  
    const openConfirmationAlert = () => {
      Alert.alert(
        "Removing the Comment",
        "Are you sure?",
        [
          { text: "Yes", onPress: () => deleteMeal() },
          { text: "No", onPress: () => console.log("canceled") },
        ],
        {
          cancelable: true,
        }
      );
    };
  
   const updateMeal = async () => {
      const CommentRef = todo.doc(send.id);
      await CommentRef.set({
        Comments: send.Comments
      });
      setSend(initialState);
      props.navigation.navigate("Home");
    };
    */
  
    useEffect(() => {
      getMealById(props.route.params.sendId);
    }, []);
  
    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
  
    return (
      <ScrollView style={styles.bck}>
        <View >
        <Avatar style={styles.image} rounded source={{uri: send.image}}></Avatar> 
        </View>
        <View >
        <Text style={styles.content}>{send.name}</Text> 
           <Text style={styles.content2}>{send.details}</Text>  
           <Text style={styles.content3}>{send.price}</Text>  
        </View>
      
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
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
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    btn: {
      borderRadius:20,
      marginBottom: 7,
    },
    image:{
        width:300,
        height:300,
       alignSelf:"center",
        borderWidth: 4,
        borderRadius:21,
          borderColor: "#F2CF66",
          margin:4
    },
    content:{
        color:'#F2CF66',
        textAlign:'center',
        fontSize:20,
        margin:5
    },
    content2:{
        textAlign:'center',
        fontSize:15,
        margin:5,
        color:'#F2CF66',
    },
    content3:{
        textAlign:'center',
        fontSize:15,
        margin:5,
        color:'#F2CF66',
    },
    bck:{
        flex: 1,
        padding: 35,
        backgroundColor: '#113361',
        
    },
    bckmeals:{
        backgroundColor: '#F2CF66',
        margin:15,
        justifyContent: 'center',
        
    }
  });
