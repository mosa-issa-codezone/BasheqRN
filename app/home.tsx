import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
// import { contact } from '@/components/res/data-\/'
import Product from '@/components/Product'
import { contact } from '@/components/res/data'
import { Ionicons } from '@expo/vector-icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router'

const home = () => {
  const nav = useNavigation()
  //   const nav = useNavigation()
  // const goToCart=()=>{
  //   nav.navigate("cart")
  // }
  const renderData = () => {
    const cardArray = contact.map(item => {
      return <Product
        number={item.number}
        price={item.price}
        imag={item.imag}
      />
    })
    return cardArray
  }

  return (
    <View style={styles.v}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { nav.navigate("cart") }}>
            <Ionicons name='cart-outline' size={30} color={"red"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { nav.navigate("login") }}>
            <Text style={styles.logText}>login</Text>
          </TouchableOpacity>
        </View>



        {renderData()}
      </ScrollView>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  v: {
    backgroundColor: "black",
    color: "red"
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  logText: {
    color: "white"
  }

})