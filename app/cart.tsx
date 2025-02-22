import Images from '@/assets/Images/images'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <Image style={styles.img} source={Images.iphone14()} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f5', // Soft background color for a modern feel
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textTransform: 'uppercase', // Makes the text uppercase
    letterSpacing: 1.5, // Adds spacing between letters
  },
  img: {
    height: 240, // Slightly larger image
    width: '100%',
    borderRadius: 30, // More rounded corners
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff6347', // Bright and modern button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    shadowColor: '#ff6347',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Makes the text uppercase
    letterSpacing: 1.2, // Adds spacing between letters
  },
})


