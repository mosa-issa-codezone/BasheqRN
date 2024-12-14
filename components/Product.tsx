import { Image, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'


const Product = (props) => {
  const nav = useNavigation()
  return (
    <TouchableOpacity style={styles.card} onPress={() => { nav.navigate('Screen2', {...props})}} >
      <View style={styles.A}> 
        <Text style={styles.n1n}>{props.number}</Text>
        <Text style={styles.nn}>{props.price}</Text>
      </View>

      <View style={styles.img}>
        <Image style={styles.IMG} source={props.imag} />
      </View>       
    </TouchableOpacity>
  )
}        

export default Product

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:"black",
    borderBottomWidth:1,
    borderColor:'white'
    
  },
  
  nn: {
    fontSize: 20,
    color: "black",
    backgroundColor:"white",
    borderRadius:5,
    width:60,
    textAlign:"center",
    marginRight:"auto",
    marginBottom:25,
   marginTop:1,
  },
  IMG: {
    height: '90%',
    width: '100%',
    borderRadius:40,

  },


  img: {
    height: 200,
    width: 200,
    borderRadius: 10,
    borderWidth: 2,
    
  },
  n1n:{
    color:"red",
    fontSize:28 
  }
})






