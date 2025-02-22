   import { StyleSheet, Text, View ,  Image  } from 'react-native'
import React from 'react'
import Images from '../src/images/images'

const Card = (props) => {
  return (
    <View style={styles.chat}>
     <Image source={props.img} style={styles.user}/>
      <View style={styles.chatTop}>
        <Text >{props.name}</Text>
        <View style={styles.NameTime}>
        <Text>{props.msg}</Text>
        <Text style={styles.wi}>{props.time}</Text>
        </View >
       
      </View>   
      
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    chat:{
        flexDirection:'row',
        marginVertical:20,
      },
      user:{
        width:60,
        height:60,  
        borderRadius:25,marginLeft: 10 
    
      },

      NameTime: {
        flexDirection: 'row'
      },
      time: {
        marginLeft: 200
      },
      chatTop: {
        marginLeft: 40
      }
    })




    

      