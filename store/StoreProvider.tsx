import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import StoreContext from './storeContext'
import { createAnimatedComponent } from 'react-native-reanimated/lib/typescript/createAnimatedComponent'
import { router } from 'expo-router'

const StoreProvider = (props) => {

    const [cart, setCart] = useState([])
    const providerValue = {
        cart,
        setCart

    }
    // const {cart,setCart}=useContext(StoreContext)
    //         const addToCart=()=>{
    //             const CartList=cart 
    //           CartList.push (router.params)
                         
    //         }

    return (
        <StoreContext.Provider value={providerValue}>
            {props.children}
        </StoreContext.Provider>
      
    )
}

export default StoreProvider

        
            
