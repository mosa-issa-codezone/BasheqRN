import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState("")

  const nav = useNavigation()

  const logUser = () => {
    if (userName === "hhh" && password === "123") {
      nav.navigate("home")
    }
    else {
      Alert.alert("userName or password are not valid")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(e) => setUserName(e)} style={styles.input} placeholder='userName' />
      <TextInput secureTextEntry onChangeText={(e) => setPassword(e)} style={styles.input} placeholder='password' />
      <TouchableOpacity onPress={logUser}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginTxt}>login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate("register")}>
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

