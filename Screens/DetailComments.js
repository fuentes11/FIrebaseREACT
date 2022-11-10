import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView,ActivityIndicator,Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { collection,getDocs,doc, setDoc } from "firebase/firestore";
import {firebase} from '../BBDD/bd';


export default function DetailComments(props) {
  const {navigation} = props;
    
    const todo = firebase.firestore().collection('Comments');
    const initialState = {
      id: "",
      Comments: ""
    };
  
    const [send, setSend] = useState(initialState);
    const [loading, setLoading] = useState(true);
  
    const handleTextChange = (value, prop) => {
      setSend({ ...send, [prop]: value });
    };
  
    const getCommentById = async (id) => {
      const dbRef = todo.doc(id);
      const doc = await dbRef.get();
      const send = doc.data();
      setSend({ ...send, id: doc.id });
      setLoading(false);
    };
  
    const deleteComment = async () => {
      setLoading(true)
      const dbRef = todo.doc(props.route.params.sendId);
      await dbRef.delete();
      setLoading(false)
      props.navigation.navigate("CommentsG");
    };
  
    const openConfirmationAlert = () => {
      Alert.alert(
        "Removing the Comment",
        "Are you sure?",
        [
          { text: "Yes", onPress: () => deleteComment() },
          { text: "No", onPress: () => console.log("canceled") },
        ],
        {
          cancelable: true,
        }
      );
    };
  
      const updateComment = async () => { 
      const CommentRef = todo.doc(send.id);
      await CommentRef.set({
        Comments: send.Comments
      });
      setSend(initialState);
      props.navigation.navigate("CommentsG");
    };
  
    useEffect(() => {
      getCommentById(props.route.params.sendId);
    }, []);
  
    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
  
    return (
      <ScrollView style={styles.container}>
        <View>
          <TextInput
            placeholder="Comment"
            style={styles.inputGroup}
            value={send.Comments}
            onChangeText={(value) => handleTextChange(value, "Comments")}
          />
        </View>
        
        <View style={styles.btn}>
          <Button
            title="Delete"
            onPress={() => openConfirmationAlert()}
            color="red"
          />
        </View>
        <View style={styles.btn}>
          <Button title="Update" onPress={() => updateComment()} color="#19AC52" />
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
  });
