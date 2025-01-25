import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import Images from '@/assets/Images/images'

const index = () => {
  const nav = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      // nav.navigate('home');
    }, 3000)


  }, []
  )
  return (
    <View style={styles.v}>
      <Pressable onPress={() => { nav.navigate('/login') }}>
        <Image style={styles.img} source={Images.iphone13()} />
      </Pressable>
      <Text style={styles.ter}>Bashwq phones</Text>
      <TouchableOpacity onPress={() => { router.navigate('/login') }}>
        <Text style={styles.logText}>login</Text>
      </TouchableOpacity>

    </View>
  )
}

export default index
const styles = StyleSheet.create({
  img: {
    marginTop: 0,
  },
  v: {
    backgroundColor: "black",
    flex: 1,
  },
  logText: {
    color: "white"

  },
  ter: {
    color: "red",
    fontSize: 30,
  }
})