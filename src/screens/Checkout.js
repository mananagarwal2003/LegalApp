import { StyleSheet, Text, View,TouchableOpacity,Image, Pressable} from 'react-native'
import React,{useState}from 'react'
import RazorpayCheckout from "react-native-razorpay";
const Checkout = () => {
    const [selectedMethod, setSelectedMethod] = useState(0); 
  return (
    <View style={styles.container}>
        <View style={styles.titlecontainer}><Text style={styles.title}>Select Payment Mode</Text></View>
       
        <View style={styles.option}>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => {
            setSelectedMethod(0);
          }}
        >
          <Image
            source={
              selectedMethod == 0
                ? require("../images/radio_1.png")
                : require("../images/radio_2.png")
            }
            style={[
              styles.img,
              { tintColor: selectedMethod == 0 ? "orange" : "black" },
            ]}
          />
          <Text style={styles.paymentMethdodsTxt}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => {
            setSelectedMethod(1);
          }}
        >
          <Image
            source={
              selectedMethod == 1
                ? require("../images/radio_1.png")
                : require("../images/radio_2.png")
            }
            style={[
              styles.img,
              { tintColor: selectedMethod == 1 ? "orange" : "black" },
            ]}
          />
          <Text style={styles.paymentMethdodsTxt}>Debit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => {
            setSelectedMethod(2);
          }}
        >
          <Image
            source={
              selectedMethod == 2
                ? require("../images/radio_1.png")
                : require("../images/radio_2.png")
            }
            style={[
              styles.img,
              { tintColor: selectedMethod == 2 ? "orange" : "black" },
            ]}
          />
          <Text style={styles.paymentMethdodsTxt}>UPI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => {
            setSelectedMethod(3);
          }}
        >
          <Image
            source={
              selectedMethod == 3
                ? require("../images/radio_1.png")
                : require("../images/radio_2.png")
            }
            style={[
              styles.img,
              { tintColor: selectedMethod == 3 ? "orange" : "black" },
            ]}
          />
          <Text style={styles.paymentMethdodsTxt}>Cash on Delivery</Text>
        </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
             onPress={() => {
                var options = {
                  description: "Credits towards consultation",
                  image: "https://i.imgur.com/3g7nmJC.png",
                  key: "rzp_test_5YANgYElbJJ9G9",
                  prefill: {
                    email: "agarwalmanan69@gmail.com",
                    contact: "7627081914",
                    name: "Manan Agarwal",
                  },
                  theme: { color: "#F37254" },
                };
                RazorpayCheckout.open(options)
                  .then((data) => {
                    // handle success
                    alert(`Success: ${data.razorpay_payment_id}`);
                  })
                  .catch((error) => {
                    // handle failure
                    alert(`Error: ${error.code} | ${error.description}`);
                  });
              }}
              style={{
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                marginTop:200
              }}
            >
              <View
                style={{
                  width: 150,
                  height: 40,
                  borderRadius: 30,
                  backgroundColor: "#D8DCE0",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16,
    fontWeight: "bold",
    color: "black",}}>Pay Here</Text>
              </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    titlecontainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,

    },
    title:{
        fontWeight:'bold',
        fontSize:25,
        
    },
    img:{
        width:25,
        height:25
    },
    paymentMethdodsTxt:{
        fontSize:18,
        fontWeight:'400',
        marginLeft:5
    },
    paymentMethods:{
        flexDirection:'row',
        margin:8,
    },
    option:{
        margin:20,
        top:20
    }
})