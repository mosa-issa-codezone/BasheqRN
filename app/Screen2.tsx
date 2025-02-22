import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

const Screen2 = (props) => {
  const [x, setX] = useState(1)
  const {data} = useLocalSearchParams?.()
  const route = data ? JSON.parse(data) : {}
  console.log("hellow screen2", data)

  return (
    <View style={styles.container}>
      <Image source={route.imag} style={styles.image} />
      <Text style={styles.priceText}>{route.price}₪</Text>

      <View style={styles.quantityContainer}>
        <Pressable onPress={() => setX(x + 1)}>
          <Text style={styles.quantityText}>+</Text>
        </Pressable>    

        <Text style={styles.quantityText}>{x}</Text>

        <Pressable onPress={() => { if (x > 0) setX(x - 1) }}>     
          <Text style={styles.quantityText}>-</Text>
        </Pressable>
      </View>

      <Text style={styles.numberText}>{route.number}</Text>
      <Text style={styles.totalPrice}>{route.price * x}₪</Text>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>הוסף לעגלה</Text>
      </TouchableOpacity> 
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  image: {
    height: 350,
    width: 320,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  priceText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#333",
    marginBottom: 15,
  },
  quantityContainer: {
    flexDirection: "row",
    width: 160,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityText: {
    fontSize: 32,
    color: "white",
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: "#4CAF50",
  },
  numberText: {
    fontSize: 28,
    color: "#007aff",
    marginBottom: 15,
  },
  totalPrice: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#e60023",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#007aff",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 5, // adds shadow for Android devices
  },
  addButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 'bold',
  },
})
