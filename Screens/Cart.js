import React, { Component } from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import { StyleSheet, Text, View, ActivityIndicator,ScrollView } from 'react-native';
import {firebase} from '../BBDD/bd';

export default class Cart extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Meals');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getMealById);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getMealById = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((send) => {
      const { cantidad, details, name, price, subTotal, image } = send.data();
      userArr.push({
        key: send.id,
        send,
        cantidad,
        details,
        name,
        price,
        subTotal,
        image,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
  }

render(){
  if(this.state.isLoading){
    return(
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E"/>
      </View>
    )
  }   

return (
    <ScrollView styles={{marginBottom:100}}>
<View style={styles.container}>

{
        this.state.userArr.map((item, i) => {
          return (
            
<View style={styles.cardProducto}>
        <View style={styles.card}>
          <View style={styles.imagenRow}>
            <View style={styles.imagen}>
            <Avatar style={styles.imagen} rounded source={{uri: item.image}}></Avatar> 
            </View>
            <View style={styles.tituloColumnColumn}>
              <View style={styles.tituloColumn}>
        <Text style={styles.titulo}>{item.name}</Text>
                <Text style={styles.descripcion}>{item.details}</Text>
          <Text style={styles.precio}>${item.price}</Text>
              </View>
              <Text style={styles.agregar}>Agregar</Text>
            </View>
          </View>
        </View>
      </View>
      
          )
  })
}

</View>
</ScrollView>
);
}

}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
cardProducto: {
    width: 341,
    height: 121,
    marginTop: 40,
    marginLeft: 9
  },
  card: {
    height: 140,
    backgroundColor: "rgba(188,173,173,1)",
    borderRadius: 15
  },
  imagen: {
    width: 71,
    height: 78,
    backgroundColor: "#E6E6E6",
    marginTop: 1
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
    marginLeft: 39
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
    width: 93,
    marginLeft: 41
  },
  imagenRow: {
    height: 88,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 12,
    marginRight: 124
  }
});