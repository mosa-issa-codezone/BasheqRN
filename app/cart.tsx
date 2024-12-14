import Images from '@/assets/Images/images'
import { Image, StyleSheet, Text, View } from 'react-native'

const cart = () => {
  return (
    <View>
      <Text>cart</Text>
      <Image style={styles.IMG} source={Images.iphone15()} />           
    </View>
  )
}
export default cart

const styles = StyleSheet.create({
  
  IMG: {
    height:199 ,
    width: '100%',
    borderRadius:40,
    resizeMode:'contain'

  },
})