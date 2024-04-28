import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../api/api";
import { UserType } from "../Context/UserContext";

export default function LawyerDetails() {
  const { userId, setUserId } = useContext(UserType);
  const { personDetails } = useRoute().params;
  const navigation = useNavigation();
  const { name, LawyerCat, Number, LawyerID, about ,_id} = personDetails;
  const [isReadMore, setReadMore] = useState(false);
 console.log(_id)
 console.log(userId)

 const sendFriendRequest = async (currentUserId, selectedUserId) => {
  try {
    const response = await fetch(`${api}/friend-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentUserId, selectedUserId }),
    });

    if (response.ok) {
      console.log("ok")
      navigation.navigate("ChatMenuUser")
      // setRequestSent(true);
    }
  } catch (error) {
    console.log("error message", error);
  }
};
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.heading}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ flexDirection: "row", gap: 10 ,top:10}}
            >
              <Ionicons name="arrow-back-outline" size={30} color="black" />
              <Text style={{fontSize:20,fontWeight:'500'}}>Personal Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <Image source={require("../images/a.png")} style={styles.image}></Image>
            <Text style={styles.name}>{name} </Text>
            <Text style={{color:'grey'}}>{LawyerCat} </Text>
            {/* <Text style={styles.address}>
              <Ionicons name="location-sharp" size={15} /> {address} abc
            </Text> */}
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutHeading}>About Me</Text>
              <ScrollView>
                <Text
                  style={styles.aboutText}
                  numberOfLines={isReadMore ? 20 : 5}
                >
                  {about}
                </Text>
                <TouchableOpacity onPress={() => setReadMore(!isReadMore)}>
                  <Text style={styles.readMore}>
                    {isReadMore ? "Read less" : "Read more"}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity  onPress={() => sendFriendRequest(userId, _id)} style={styles.button}>
          <Text style={styles.buttonText} >Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={()=>navigation.navigate("Checkout")}>
          <Text style={[styles.buttonText]}>Book Now</Text>
        </TouchableOpacity>
        {/* <Pressable
          onPress={() => sendFriendRequest(userId, _id)}
          style={{
            backgroundColor: "#567189",
            padding: 10,
            borderRadius: 6,
            width: 105,
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 13 }}>
            Add Friend
          </Text>
        </Pressable> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white'
  },
  heading: {
    paddingBottom: 30,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginTop: -20,
  },
  details: {
    paddingTop: 20,
    borderRadius: 20,
    marginTop: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    alignItems: "flex-start",
  },
  task: {
    fontSize: 25,
    fontWeight: "bold",
  },
  name: {
    fontSize: 22,
    fontWeight:"700",
    color: "black",
    marginTop: 15,
  },
  address: {
    fontSize: 17,
    marginTop: 9,
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  aboutContainer: {
    borderTopWidth: 2,
    marginTop: 20,
  },
  aboutHeading: {
    marginTop: 18,
    fontWeight: "600",
    fontSize: 18,
  },
  aboutText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
  },
  readMore: {
    color: "black",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8DCE0",
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  image:{
    width:'100%',
    borderRadius:20,
    

  }
});
