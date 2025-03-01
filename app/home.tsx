import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Product from '@/components/Product'
import { contact } from '@/components/res/data'
import { Ionicons } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { Findproducts } from '@/res/api'

const Home = () => {
  const nav = useNavigation()
  const [products, setProducts] = useState([])

  const renderData = () => {
    return products.map((item, index) => (
      <Product
        key={index}
        number={item.number}
        price={item.price}
        img={item.img}
      />
    ))
  }

  const getPruductApi = () => {
    Findproducts().then((value) => {
      console.log("value", value.data);
      setProducts(value.data)
    })
  }

  useEffect(() => {
    getPruductApi()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { router.replace("/cart") }}>
            <Ionicons name='cart-outline' size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>מסך הבית</Text>
        </View>
        <View style={styles.productContainer}>

          {
            products?.length ?
              renderData()
              :
              <ActivityIndicator size={'large'} />
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f4f7", // Light grey background for a modern look
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20, // Bottom padding for spacing
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#007aff", // Bright blue background
    borderBottomLeftRadius: 25,  // Rounded bottom corners
    borderBottomRightRadius: 25, // Rounded bottom corners
    shadowColor: "#000", // Shadow for the header
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#fff", // White text color
  },
  productContainer: {
    padding: 20, // Padding for product container
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
})
