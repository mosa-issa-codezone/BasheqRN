import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import Images from '@/assets/Images/images'

const index = () => {
  const nav = useNavigation()
  useEffect(()=>{
    const timer=setTimeout(()=>{
      nav.navigate('home');
    },3000)


  }
)
  return (
    <View style={styles.v}>
      <Pressable onPress={() => { nav.navigate('home')}}>
        <Image style={styles.img} source={Images.iphone13()}/>  
      </Pressable>
        <Text style={styles.ter}>Bashwq phones</Text>
    </View>
  )   
}
   
export default index
const styles = StyleSheet.create({
  img:{
    marginTop:0,
  },
  v:{
    backgroundColor:"black",
    flex:1,
  },
  ter:{
    color:"red",
    fontSize:30,
  }
  })