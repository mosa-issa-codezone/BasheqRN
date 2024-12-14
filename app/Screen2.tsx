import { Pressable, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { useRoute } from '@react-navigation/native'

const Screen2 = (props) => {
  const route = useRoute()
  const [x, setX] = useState(1)

  return (
    <View style={styles.v}>
      <Image source={route.params.imag}style={styles.img }/>
      <Text style={styles.g}>{route.params.price}</Text>


      <View style={styles.n}>
        <Pressable onPress={()=>setX(x+1)} >
        <Text style={styles.text}>+</Text>
        </Pressable>    


        <Text style={styles.text}>{x}</Text>
        <Pressable onPress={()=>{
          if (x> 0) {
            setX(x-1)     
          }  
        }}>     
        
        <Text style={styles.text}>- </Text> 
        </Pressable>
      </View>
      <Text style={styles.g}>{route.params.number}</Text>

      <Text style={styles.ffd}>{route.params.price*x}₪</Text>
      <TouchableOpacity>
        <Text style={styles.jn}>add to crat</Text>
      </TouchableOpacity>
    </View>
  )

}

export default Screen2

const styles = StyleSheet.create({
  n:{
    flexDirection:"row",
    width: 150,
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  g:{
color:"black",

  },

  text:{
    fontSize: 40,
    color: 'white'
  },
  img:{
    height:400,
    width:300,
    marginLeft:50,
    borderWidth:2
         
  },
  ffd:{
    fontSize:40,
    textAlign:"center",
    marginTop:20,
    color:"red"
  },
  v:{
    backgroundColor:"black",
    flex:1 
  },
  jn:{
    color:"black",
    backgroundColor:"white",
    fontSize:30,
    width:150,
    height:43,
  }
})  



