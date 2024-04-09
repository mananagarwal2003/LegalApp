import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const BasicButton = ({Title,navigation,onPress}) => {
  return (
    <Pressable 
    onPress={onPress}
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
      {Title}
    </Text>
    </View>
  </Pressable>
  )
}

export default BasicButton

const styles = StyleSheet.create({})