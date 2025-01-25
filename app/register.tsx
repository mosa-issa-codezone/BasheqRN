import {  StyleSheet, Text, TextInput,ScrollView, View, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const register = () => {
  return (
    <ScrollView style={styles.scrol}>
    <View style={styles.mom} >
      <Text style={styles.jjj}>register</Text>
        <TextInput style={styles.logen}placeholder='email  '  />

        <TextInput style={styles.logen}placeholder='user rName  '  />

        <TextInput style={styles.logen}placeholder='password  '  />

        <TextInput style={styles.logen}placeholder='phone  '  />

        <Pressable onPress={() => router.navigate('/home')}>
          <View>
          <Text style={styles.log}>LOGIN  </Text>
          </View>
           
        </Pressable>
 
    </View>
    </ScrollView>
  )
}

export default register

const styles = StyleSheet.create({
  logen:{
    fontSize:15,
    // textAlign:"center",
    marginTop:20,
    width:270,
    height:60,
    textAlign:"center",
marginLeft:70,
shadowColor:"#000",
shadowOpacity:0.2,
shadowRadius:5,
elevation:2,


  }, 
  scrol:{
backgroundColor:"#EAF6F6"
  } ,  
  jjj:{
    fontSize:30,
    textAlign:"center",
    width:150,
    height:50,
    marginLeft:110,
    fontWeight:"bold",
  },
  stayl:{
    fontSize:15,
    marginLeft:10,
  },
  mom:{
marginTop:150,
  },
  log:{
    borderWidth:1,
    backgroundColor:"#161D6F",
    textAlign:"center",
    width:270,
    height:30,
    color:"white",
    marginLeft:70,
    marginTop:20,
    borderRadius:5,
  
    
    
  }
})    