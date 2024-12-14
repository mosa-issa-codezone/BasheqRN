import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Callerscard = () => {
    return (
        <View style={styles.card}>

            <View style={styles.img}>

            </View>
            <View style={styles.number}>

            </View>

            <View style={styles.time}>

            </View>
        </View>

    )
}

export default Callerscard

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: 350,
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 20
    },
    img: {
        width: "90%",
        height: "100%",
        borderwidth: 1,
    },
    number: {
        width: "90%",
        height: "100%",
        borderwidth: 1,
    },
    time: {
        width: "90%",
        height: "100%",
        borderwidth: 1,
    },

})