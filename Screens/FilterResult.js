import React, { useState, useEffect } from "react";
import { ListView, Text, View, Image, TouchableOpacity,Button, StyleSheet, TextInput, Dimensions, } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import {firebase} from '../BBDD/bd';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FilterResult(props) {
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
        const { price,name, details,image } = doc.data();
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
     <ScrollView>
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
     
      {dataaa.map((dataaa) => {
         if(props.dataaaName ==  dataaa.name){
           return (
          <ListItem
            key={dataaa.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("DetailMeal", {dataaaId: dataaa.id,});
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:dataaa.image,
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{dataaa.name}</ListItem.Title>
              <ListItem.Subtitle>{dataaa.details}</ListItem.Subtitle>
            </ListItem.Content> 
          </ListItem>
        );
         } else{
           
         <Text>NO se ha podido encontrar la receta que usted busca</Text> 
         }
        
      }  ) }
      
          
    </ScrollView>
   );
}

const styles = StyleSheet.create ({
  container: {
   width: windowWidth*1,
   height: (windowHeight/4)*0.65,
     padding: 10,
     marginTop: 3,
     backgroundColor: 'white',
     alignItems: 'center',
     textAlign: 'center',
     flex:1,
     flexDirection:'row',
    
  },
  textI: {
   height: windowHeight/4,
   width: windowWidth*0.95,
     color: '#4f603c',
     paddingLeft: 50,
     borderColor: 'black',
     borderWidth: 1,
     width: 200,
     marginRight: 10,
     marginLeft: 20,
     textAlign: "left",
     height: 30,
     borderRadius: 10,
  },

})
