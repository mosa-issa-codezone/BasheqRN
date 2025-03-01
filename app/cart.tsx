import Images from "@/assets/Images/images";
import StoreContext from "@/store/StoreContext";
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Cart = () => {
  const { cart, setCart } = useContext(StoreContext);

  const removeFromCart = (index) => {
    // console.log(index);

    var test = cart.splice(index, 1);
    // console.log(test);
    
    setCart([...cart]);
  };

  const renderCart = ({ item, index }) => {
    console.log("item", item);

    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.img }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeFromCart(index)}
          >
            <FontAwesome5 name="trash" size={20} color="#ff6347" />
            {/* <Text style={styles.removeButtonText}>Remove</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <FlatList data={cart} renderItem={renderCart} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f5",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
  },
  removeButton: {
    // marginTop: 5,
  },
  removeButtonText: {
    color: "#ff6347",
  },
  totalContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    textAlign: "center",
  },
});
