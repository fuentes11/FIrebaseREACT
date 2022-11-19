import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView,ActivityIndicator,RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Icon, Input, ListItem, } from 'react-native-elements';
import { MaterialCommunityIcons,FontAwesome,Entypo  } from '@expo/vector-icons';
import { collection,getDocs,doc, setDoc } from "firebase/firestore";
import {firebase} from '../BBDD/bd';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

function Sending(Carrito){
  var Factura="Pedido:\n";
  var TotalFinal=0;
  Carrito.map((product,i)=>{
    Factura=Factura+""+"\n Producto :"+product.name+" "+ "\n cantidad :"+product.cantidad+"\n Precio$"+product.price+"\n"
    TotalFinal+=product.price;
  })
  Factura+='\n Total a pagar: $'+ TotalFinal
  return(Factura)
}
function totales(final){
  var Facturas="Pedido:\n";
  var TotalFinals=0;
  final.map((price,i)=>{
    TotalFinals+=price.price;
  })
  Facturas+='\n Total a pagar: $'+ TotalFinals
  return(Facturas)
}

export default function Cart(props) {
  
  const {navigation} = props;
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  let url = "whatsapp://send?text="+ Sending(global.Cart)+ "&phone=50370508533"
  

return (
  
  <SafeAreaView style={styles.bck}>
  <ScrollView 
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  }
  >
{
       global.Cart.map((product,i) =>{

          return (
            
<View style={styles.cardProducto} key={i}>
        <View style={styles.card}>
          <View style={styles.imagenRow}>
            <View >
              <Avatar style={styles.imagen} rounded source={{uri: product.image}}></Avatar> 
            </View>
            <View style={styles.tituloColumnColumn}>
              <View style={styles.tituloColumn}>
                <Text style={styles.titulo}>{product.name}</Text>
                <Text style={styles.descripcion}>Cantidad:{product.cantidad}</Text>
                <Text style={styles.precio}>TOTAL:${product.price}</Text>
            </View> 
            </View>
            <TouchableOpacity style={styles.text} onPress={() => {global.Cart.splice(i, 1),setRefreshing(true) }}>
            <MaterialCommunityIcons name="delete-forever" size={60} color="black"  />             
             </TouchableOpacity>
            </View>
            
          </View>
          
          
        </View>
      
          )
          
          
  })
  
}


<TouchableOpacity 
style={styles.Button}
onPress={() => {Linking.openURL(url),global.Cart=[]
}}>
  <Text>Enviar Pedido <FontAwesome name="send-o" size={24} color="black" /></Text>
</TouchableOpacity>
</ScrollView>
 </SafeAreaView>


);

}



const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
cardProducto: {
    width: 400,
    height: 122,
    marginTop: 40,
    backgroundColor: '#F2CF66',
    borderRadius:21,
    borderColor: "#113361",
    marginLeft: 9
  },
  card: {
    height: 140,
    backgroundColor: '#F2CF66',
    borderRadius:21,
    borderColor: "#113361",
    justifyContent:'center',
  },
  imagen: {
    width: 71,
    height: 78,
    borderWidth: 4,
    borderRadius:21,
    borderColor: "#113361",
    justifyContent:'center',
    display:'block',
  },
  titulo: {
    color: "#121212",
    marginLeft: 5,
    fontWeight:"bold"
  },
  descripcion: {
    color: "#121212",
    marginTop: 2
  },
  precio: {
    color: "#121212",
    marginTop: 4,
  },
  tituloColumn: {
    width: 130
  },
  agregar: {
    color: "#121212",
    marginTop: 13,
    marginLeft: 22
  },
  tituloColumnColumn: {
    width: 200,
    marginLeft: 41
  },
  imagenRow: {
    height: 88,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 12,
    marginRight: 124
  },
  bck:{
    width:'100%',
    height:'100%',
     backgroundColor: '#113361',
 },
 text:{
  alignSelf:'flex-end',
  alignContent:'center',
  justifyContent:'flex-end'
  
},
 Button:{
  marginTop:50,
  borderWidth: 4,
  borderRadius:21,
  borderColor: "#113361",
  justifyContent:'center',
  alignItems:'center',
  width:200,
  backgroundColor:'#F2CF66',
  height:50,
  alignSelf: 'center',
 }

});