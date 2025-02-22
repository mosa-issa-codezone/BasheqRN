import { Pressable, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation } from 'expo-router'

const Index = () => {
  const nav = useNavigation()
  const [fadeAnim] = useState(new Animated.Value(0))  // لإضافة تأثير التلاشي

  useEffect(() => {
    // تنفيذ حركة التلاشي للنص
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start()

    setTimeout(() => {
      // عند الحاجة للانتقال بعد 3 ثواني
      // nav.navigate('home');
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        סמארטפון
      </Animated.Text>
      <TouchableOpacity onPress={() => { router.navigate('/login') }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>כניסה</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6f7ff", // Light blue background for a modern feel
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#004085", // Dark blue color for the title
    fontSize: 45, // Large font size
    fontWeight: "900", // Strong font weight
    marginBottom: 50,
    textAlign: "center",
    fontFamily: 'Roboto', // Modern font
    shadowColor: '#000', // Text shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  button: {
    backgroundColor: "#ff5722", // Vibrant orange button color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5, // Light shadow effect for the button
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    textTransform: "uppercase", // Uppercase button text
  }, 
})

