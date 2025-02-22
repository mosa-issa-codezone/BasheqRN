import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
import { login } from '@/res/api'

const Login = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState("")

  const nav = useNavigation()

  const logUser = () => {
    const body = {
      phone: phone,
      password: password
    }
    login(body)
      .then((response) => {
        console.log("login res:", response);

        if (response?.success == true) {
          nav.navigate('home')
        } else {
          alert('הכניסה נכשלה')
        }
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>התחברות</Text>

      <TextInput
        onChangeText={(e) => setPhone(e)}
        style={styles.input}
        placeholder='טלפון'
        keyboardType='phone-pad'
      />
      <TextInput
        secureTextEntry
        onChangeText={(e) => setPassword(e)}
        style={styles.input}
        placeholder='סיסמה'
      />
      
      <TouchableOpacity onPress={logUser}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginTxt}>התחבר</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => nav.navigate("register")}>
        <Text style={styles.createAccountTxt}>צור חשבון חדש</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e8f4f8", // خلفية هادئة
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007aff',
    marginBottom: 30,
  },
  input: {
    width: "90%",
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#007aff",
    borderWidth: 2,
    shadowColor: "#000", // إضافة ظل خفيف للحقل النصي
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  loginTxt: {
    fontSize: 20,
    color: "white",
    fontWeight: '600',
  },
  loginContainer: {
    backgroundColor: '#007aff', // اللون الأزرق الجذاب
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 25,
    shadowColor: "#000", // ظل للزر
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4, // تأثير ظل على النظام
  },
  createAccountTxt: {
    fontSize: 16,
    color: "#007aff",
    fontWeight: '500',
  },
})
