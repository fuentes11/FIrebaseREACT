import React, { useState, useEffect } from "react";
import { ListView, Text, View, Image, TouchableOpacity,Button, StyleSheet, TextInput, Dimensions, } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import {firebase} from '../BBDD/bd';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FilterList(props) {
  const {navigation} = props;

  const initalState = {
    name: "",
  };

  const [state, setState] = useState(initalState);
  
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };
  const todo = firebase.firestore().collection('Meals');

  

  const [dataaa , setDataaa]= useState([])
  useEffect(() => {
    todo.onSnapshot((querySnapshot) => {
      const dataaa = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, details,image,price } = doc.data();
        dataaa.push({
          id: doc.id,
          price,
          name,
          details,
          image,
        });
      });
      setDataaa(dataaa);
    });
  }, []);
  return ( 
     <ScrollView >
     <View style={styles.container}>
       <TextInput
        style={styles.textI}
          placeholder="Meal"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        /> 
        <Button title="Search" 
            onPress={() => {
              props.navigation.navigate("FilterResult", { dataaaName: state.name, });
            }} 
            color="#77F1B3"/>
     </View>
     
      {dataaa.map((send) => {
        return (
          <ListItem 
            key={send.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("DetailMeal", {sendId: send.id,});
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:send.image,
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{send.name}</ListItem.Title>
              <ListItem.Subtitle>{send.details}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
   );
}

const styles = StyleSheet.create ({
   container: {
    width: windowWidth*1,
    height: windowHeight*0.18                 ,
      padding: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      flex:1,
      flexDirection:'row',
     
   },
   textI: {
    height: windowHeight*0.05,
    width: windowWidth*0.70,
      color: '#4f603c',
      paddingLeft: 50,
      borderColor: 'black',
      borderWidth: 1,
      marginRight: 10,
      marginLeft: 20,
      textAlign: "left",
      borderRadius: 10,
   },
   textWrapper: {
    height: windowHeight*0.10, // 70% of height device screen
    width: windowWidth*0.20 // 80% of width device screen
  },
})
