import { StyleSheet, Text, View,TextInput,Button} from 'react-native'
import React from 'react'

const Corpus = () => {
  return (
    <View>
      <View style={{alignItems:'center',flexDirection:'row',position:'absolute',top:620,justifyContent:'space-between',width:'100%'}}>
      <TextInput
          placeholder="Name"
          placeholderTextColor={"black"}
          style={styles.InputField}
        />
        <Button title='ok' style={{marginRight:10}}></Button>
      </View>
    </View>
  )
}

export default Corpus

const styles = StyleSheet.create({
  InputField: {
    padding: 10,
    borderColor: "#d0d0d0",
    borderWidth: 1,
    width:300,
    marginTop: 10,
    borderRadius: 20,
  },
})