import { StyleSheet, Text, View, ScrollView, Pressable  } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingTop:50}}>
      <Text style={{fontSize:30,fontWeight:'600'}}>SignUp As</Text>
      </View>
      <View
            style={{
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Pressable 
              onPress={()=>navigation.navigate("LawyerLogin")}
              style={{
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 20,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={100} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "400",fontSize:30 }}>
                Lawyer
              </Text>
            </Pressable>
            <Pressable 
              onPress={()=>navigation.navigate("UserLogin")}
              style={{
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 20,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={100} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "400",fontSize:30 }}>
                User
              </Text>
            </Pressable>
            <Text style={{fontSize:16,fontWeight:'500'}} onPress={()=>navigation.navigate("UserLogin")}>Already Have an Account? Login</Text>
          </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})





