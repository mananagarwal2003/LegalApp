import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
const Profile = ({ navigation }) => {
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Home")
      console.log("AsyncStorage cleared suc'cessfully.");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "black",
            borderRadius: 60,
            marginTop: 40,
          }}
        ></View>
        <Text style={{ fontSize: 22, fontWeight: "500", paddingTop: 5 }}>
          Name
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            paddingTop: 5,
            paddingBottom: 80,
          }}
        >
          Email
        </Text>
      </View>
      <View>
        <Pressable
          style={{
            padding: 12,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              width: 250,
              height: 50,
              borderRadius: 30,
              backgroundColor: "#D8DCE0",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View style={{ left: 20 }}>
              <MaterialIcons name="account-circle" size={24} color="black" />
            </View>
            <Text style={{ left: -10 }}>Account Information</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            padding: 12,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              width: 250,
              height: 50,
              borderRadius: 30,
              backgroundColor: "#D8DCE0",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Feather name="settings" size={24} color="black" />
            <Text style={{ left: -60 }}>Settings</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={clearAsyncStorage}
          style={{
            padding: 12,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              width: 250,
              height: 50,
              borderRadius: 30,
              backgroundColor: "#D8DCE0",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <AntDesign name="logout" size={24} color="black" />
            <Text style={{ left: -60 }}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
