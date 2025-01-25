import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
import { login } from '@/res/api'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState("")

  const nav = useNavigation()

  const logUser = () => {
   const body={
    phone:phone,
    password:password
   }
login(body)
.then((response)=>{
  console.log("login res:" , response);
  
  if(response?.success==true){
    nav.navigate('home')
  }
  else{
    alert('alssma 8lt')
  }
})
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(e) => setPhone(e)} style={styles.input} placeholder='phone' />
      <TextInput secureTextEntry onChangeText={(e) => setPassword(e)} style={styles.input} placeholder='password' />
      <TouchableOpacity onPress={logUser}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginTxt}>login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate("/home")}>
        <Text>create new account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    width: "70%",
    marginTop: 50,
  },
  loginTxt: {
    fontSize: 30,
    color: "white"
  },
  loginContainer: {
    backgroundColor: 'blue',
    marginTop: 20,
    padding: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 20

  }
})

