import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { api } from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ContactRequest from "../../Component/ContactRequest";

const LawyerChat = () => {
  // const { userId, setUserId } = useContext(UserType);
  const [friendRequests, setFriendRequests] = useState([]);
  const [LawyerID,setLawyerID] =useState('')
  useEffect(() => {
    const fetchLawyer = async () => {
      const token = await AsyncStorage.getItem("LawyerID");
      // console.log(token)
      setLawyerID(token)
      
    };
    fetchLawyer();
  }, []);
  useEffect(() => {
    fetchFriendRequests();
  }, []);

  const fetchFriendRequests = async () => {
    try {
      
      const LawyerID = await AsyncStorage.getItem("LawyerID");
      console.log(LawyerID)
      const response = await axios.get(
        `${api}/friend-request/${LawyerID}`
      );
      if (response.status === 200) {
        console.log(response.data)
        const friendRequestsData = response.data.map((friendRequest) => ({
          _id: friendRequest._id,
          name: friendRequest.name,
          email: friendRequest.email,
          
        }));
        setFriendRequests(friendRequestsData);
      }
    } catch (err) {
      console.log("error message", err);
    }
  };
  console.log(friendRequests);
  return (
    <View style={{ padding: 10, marginHorizontal: 12 ,marginTop:50}}>
    {friendRequests.length > 0 && <Text style={{fontWeight:'bold',fontSize:20}}>Your Requests!</Text>}
    {friendRequests.map((item, index) => (
      <ContactRequest
        key={index}
        item={item}
        friendRequests={friendRequests}
        setFriendRequests={setFriendRequests}
      />
    ))}
  </View>
);
};

export default LawyerChat;