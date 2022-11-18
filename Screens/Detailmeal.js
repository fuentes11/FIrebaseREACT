import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView,ActivityIndicator,Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Button, Icon, ListItem,Image } from 'react-native-elements';
import { AntDesign  } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import {firebase} from '../BBDD/bd';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionSheet from 'react-native-actions-sheet';


export default function DetailMeal(props) {
  const {navigation} = props;
    
    let actionSheet = useRef();
    let optionarray = [
      'Option 1', 'Option 2','Cancel'
    ]
    const showActionSheet=()=>{
      actionSheet.current.show();
    }
    const todo = firebase.firestore().collection('Meals');
    const [count,setCount]=useState(1);
    
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
        <View>
          <TouchableOpacity
          style={styles.add}
            onPress={()=>{ 
              showActionSheet(),
              global.Cart.push(
                {name:send.name,cantidad:count,price:(parseFloat(send.price)*count),image:send.image,id:send.id}
                )               
            }}
          > 
          <Text style={styles.content4}
          >Add to cart</Text>
          </TouchableOpacity>
          <ActionSheet
      ref={actionSheet}
      
      containerStyle={{
        borderTopLeftRadius:25,
        borderTopRightRadius:25
      }}
      indicatorStyle={{
        width:100
      }}
      gestureEnabled={true}>
      <View
        style={{
          height:300,
          width:'100%',
          alignItems:'center',
        }}>
          
          <Image 
        
        source={require('../assets/cart.gif')} 
        style={{
        width: 200,
        height: 200,}}
    />     
    <View>
        <Text style={{
          fontSize:25,
          marginLeft:20,
          marginRight:20,
          marginBottom:0,
          textAlign:'center',
        }}>¡¡LISTO😋!!</Text>
</View>
    
      </View>
      
          
    </ActionSheet>


        </View>
           
      <View style={styles.container}>


      <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>{
            if(count > 1){
              setCount(parseInt(count) -1);
            }
          }}      
          ><AntDesign name="minuscircle" size={24} color="#F2CF66" />
          </TouchableOpacity>
          <Text style={styles.content}>{count}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>{
            
              setCount(parseInt(count)+1);
          }}      
          >
            <AntDesign name="pluscircle" size={24} color="#F2CF66" />
          </TouchableOpacity>
        
          
          </View>

      </ScrollView>
      
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'row',
    justifyContent: 'space-between',
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
    content4:{
      textAlign:'center',
      fontSize:20,
      margin:5,
      color:'white',
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
        
    },
    add:{
      backgroundColor: 'green',
      borderWidth: 4,
        borderRadius:21,
          borderColor: "#F2CF66",
          margin:4
    }
  });
