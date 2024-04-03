import { StyleSheet, Text, View,ScrollView,TextInput } from 'react-native'
import React from 'react'

const LawyerLogin = () => {
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
      </View>
    </ScrollView>
  )
}

export default LawyerLogin

const styles = StyleSheet.create({})