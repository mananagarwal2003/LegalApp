import { StyleSheet, Text, View ,ScrollView, Pressable} from "react-native";
import React, { useContext,useEffect,useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api/api";
// import UserChat from "../components/UserChat";

const ChatMenuLawyer = () => {
  const [acceptedFriends, setAcceptedFriends] = useState([]);
  // const { userId, setUserId } = useContext(UserType);
  const navigation = useNavigation();
  useEffect(() => {
    const acceptedFriendsList = async () => {
      try {
        const token = await AsyncStorage.getItem("LawyerID");
        const response = await fetch(
          `${api}/accepted-friends-Lawyer/${token}`
        );
        const data = await response.json();

        if (response.ok) {
          setAcceptedFriends(data);
        }
      } catch (error) {
        console.log("error showing the accepted friends", error);
      }
    };

    acceptedFriendsList();
  }, []);
  console.log("friends",acceptedFriends)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Pressable>
          {acceptedFriends.map((item,index) => (
              <UserChat key={index} item={item}/>
          ))}
      </Pressable> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default ChatMenuLawyer
