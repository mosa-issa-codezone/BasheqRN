
import { useState } from 'react'
import StoreContext from './StoreContext'

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



