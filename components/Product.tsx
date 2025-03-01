import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const Product = (props) => {
  const nav = useNavigation()
  const data = JSON.stringify(props)

  return (
    <TouchableOpacity style={styles.card} onPress={() => {
      nav.navigate('Screen2', { data })
    }}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props?.img }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.number}>{props.number}</Text>
        <Text style={styles.price}>{props.price}₪</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Product

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff", // خلفية بيضاء أنيقة
    borderRadius: 20, // حواف مستديرة بزاوية أكبر
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5, // إضافة ظل لمنح عمق أكثر
    overflow: 'hidden', // لمنع التداخل مع الحواف
  },
  imageContainer: {
    height: 180, // جعل الصورة أكبر
    width: 180,
    borderRadius: 15, // حواف مستديرة للصورة
    overflow: 'hidden',
    marginBottom: 20, // زيادة المسافة بين الصورة والمعلومات
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15, // نفس الحواف المستديرة للصورة
    objectFit: 'cover', // التأكد من تغطية الصورة بشكل جيد
  },
  infoContainer: {
    alignItems: 'center',
  },
  number: {
    color: "#333", // لون النص أكثر دكانة
    fontSize: 24, // تكبير النص
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: "#fff", // النص أبيض
    backgroundColor: "#ff6f61", // لون سعر متدرج أحمر زاهي
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 15,
    textAlign: "center",
    fontWeight: '600', // جعل الخط أكثر سمكًا
  },
})
