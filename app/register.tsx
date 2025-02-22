import { StyleSheet, Text, TextInput, ScrollView, View, Pressable, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import { createUser } from '@/res/api'

const Register = () => {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [progress, setProgress] = useState(0)
  const nav = useNavigation()
  const registerUser = () => {
    const body = {
      userName: userName,
      email: email,
      password: password,
      phone: phone
    }
    console.log(body);
    createUser(body)
      .then((Response) => {
        console.log("Response", Response);

        if (Response.success) {
          nav.navigate('home');
        } else {
          alert(`משהו לא תקין\n ${Response.message}`);
        }
      })
      .catch((error) => {
        alert("הייתה שגיאה בתקשורת עם השרת");
        console.error(error);
      });

  }
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 1) {
        setProgress(progress + 0.1)  // شريط التقدم
      }
    }, 300);
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>הרשמה</Text>

        <Animated.View style={[styles.progressBar, { width: `${progress * 100}%` }]} />

        <Text style={styles.label}>שם משתמש</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="הכנס שם משתמש"
          keyboardType="default"
        />

        <Text style={styles.label}>אימייל</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="הכנס אימייל"
          keyboardType="email-address"
        />

        <Text style={styles.label}>סיסמה</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="הכנס סיסמה"
          secureTextEntry={true}
        />

        <Text style={styles.label}>מספר טלפון</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="הכנס מספר טלפון"
          keyboardType="phone-pad"
        />

        <Pressable onPress={registerUser} style={styles.button}>
          <Text style={styles.buttonText}>התחבר</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#e6eaf0', // A subtle gradient background
  },
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3, // Elevation for Android shadow
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#007aff', // Eye-catching title color
    textTransform: 'uppercase', // Uppercase title
    letterSpacing: 1.2, // Spacing between letters for a modern look
  },
  progressBar: {
    height: 5,
    backgroundColor: '#4caf50', // Green progress bar
    marginBottom: 20,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 8,
    color: '#555', // Improved label color
    fontWeight: '600', // Slightly bold labels
  },
  input: {
    width: '100%',
    padding: 14,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Light shadow
  },
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#007aff', // Bright blue button
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#007aff',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // Button shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
