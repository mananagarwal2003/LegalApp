import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { KeyboardAvoidingView } from "react-native";
import { api } from "../api/api";

const Corpus = () => {
const [message,setdata]=useState('')
const [ans,setans]=useState('')
 async function handlesubmit() {
    const data={
    message: message}
    const response = await axios.post(
      `${api}/bot`,
      data
    );
    answer=response.data.data;
    console.log(answer)
    setans(answer);
    setdata('')
  }
  return (
    <View >
      <Text style={{alignSelf:"center",marginTop:100}}>{ans}</Text>
      <KeyboardAvoidingView
        style={{
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          top: 320,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextInput
          placeholder="Name"
          placeholderTextColor={"black"}
          style={styles.InputField}
          onChangeText={setdata}
          value={message}
        />
        <Button
          title="ok"
          style={{ marginRight: 10 }}
          onPress={handlesubmit}
        ></Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Corpus;

const styles = StyleSheet.create({
  InputField: {
    padding: 10,
    borderColor: "#d0d0d0",
    borderWidth: 1,
    width: 300,
    marginTop: 10,
    borderRadius: 20,
  },
});
