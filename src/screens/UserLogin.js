import { StyleSheet, Text, View,ScrollView,TextInput,Pressable } from 'react-native'
import React from 'react'

const UserLogin = ({navigation}) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingTop:50}}>
      <Text style={{fontSize:30,fontWeight:'600'}}>Fill The Details</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{fontSize:17,fontWeight:'500'}}>Name</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />
        <Pressable 
              onPress={()=>navigation.navigate("Default")}
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
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: "grey",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               <Text style={{ fontWeight: "400",fontSize:30 }}>
                Login
              </Text>
              </View>
            </Pressable>
      </View>
     
    </ScrollView>
  )
}

export default UserLogin

const styles = StyleSheet.create({})