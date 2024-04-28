import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext } from "react";
// import { UserType } from "../UserContext";
import { useNavigation } from "@react-navigation/native";

const ContactRequest = ({ item, friendRequests, setFriendRequests }) => {
//   const { userId, setUserId } = useContext(UserType);
  const navigation = useNavigation();
//   const acceptRequest = async (friendRequestId) => {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/friend-request/accept",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             senderId: friendRequestId,
//             recepientId: userId,
//           }),
//         }
//       );

//       if (response.ok) {
//         setFriendRequests(
//           friendRequests.filter((request) => request._id !== friendRequestId)
//         );
//         navigation.navigate("Chats");
//       }
//     } catch (err) {
//       console.log("error acceptin the friend request", err);
//     }
//   };
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        backgroundColor:'#ebfceb',
        borderRadius:6,
        height:50
      }}
    >
    
      <Text
        style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10, flex: 1 }}
      >
        {item?.name} wants to chat!!
      </Text>

      <Pressable
        onPress={() => {}}
        style={{ backgroundColor: "#0066b2", padding: 10}}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Accept</Text>
      </Pressable>
    </Pressable>
  );
};

export default ContactRequest;



const styles = StyleSheet.create({})