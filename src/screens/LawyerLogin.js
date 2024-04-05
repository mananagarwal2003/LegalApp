import { StyleSheet, Text, View,ScrollView,TextInput,Pressable } from 'react-native'
import React from 'react'

const LawyerLogin = ({navigation}) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingTop:50}}>
      <Text style={{fontSize:30,fontWeight:'600'}}>Fill The Lawyer Details</Text>
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
            borderRadius: 20,
          }}
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 20,
          }}
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 20,
          }}
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Location</Text>
        <TextInput
          placeholder="Location"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 20,
          }}
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Phone Number</Text>
        <TextInput
          placeholder="Phone no."
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 20,
          }}
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Speciality</Text>
        <TextInput
          placeholder="Lawyer Category"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 20,
          }}
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Lawyer ID</Text>
        <TextInput
          placeholder="Valid Lawyer ID"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 20,
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
                  borderRadius: 30,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
               <Text style={{ fontWeight: "500",fontSize:20,color:'white' }}>
                Login
              </Text>
              </View>
            </Pressable>
      </View>
    </ScrollView>
  )
}

export default LawyerLogin

const styles = StyleSheet.create({})