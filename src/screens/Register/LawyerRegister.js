import { StyleSheet, Text, View,ScrollView,TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import BasicButton from '../../Component/BasicButton'
import axios from 'axios';

const LawyerRegister = ({navigation}) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Location, setLocation] = useState("");
  const [Number, setNumber] = useState(null);
  const [LawyerCat, setLawyerCat] = useState("");
  const [LawyerID, setLawyerID] = useState("");
  function handleSubmit() {
    const LawyerData = {
      name,
      email,
      Password,
      Location,
      Number,
      LawyerCat,
      LawyerID
    };
    axios
      .post("http://192.168.176.78:5001/register-Lawyer", LawyerData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "ok") {
          Alert.alert("Registered Successfull!!");
          navigation.navigate('LawyerLogin');
        } else if (res.data.status == "UserExists") {
          Alert.alert("UserExists!!");
        }
      })
      .catch((e) => console.log(e));
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingTop:50}}>
      <Text style={{fontSize:30,fontWeight:'600'}} >Fill The Lawyer Details</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{fontSize:17,fontWeight:'500'}}>Name</Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor={"black"}
          style={styles.InputField}
          onChangeText={setname}
          value={name}
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"black"}
          style={styles.InputField}
          onChangeText={setEmail}
          value={email}
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          style={styles.InputField}
          onChangeText={setPassword}
          value={Password}

        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Location</Text>
        <TextInput
          placeholder="Location"
          placeholderTextColor={"black"}
          style={styles.InputField}
          onChangeText={setLocation}
          value={Location}

        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Phone Number</Text>
        <TextInput
          placeholder="Phone no."
          placeholderTextColor={"black"}
          style={styles.InputField}
          onChangeText={setNumber}
          value={Number}
          keyboardType='decimal-pad'
        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Speciality</Text>
        <TextInput
          placeholder="Lawyer Category"
          placeholderTextColor={"black"}
          style={styles.InputField}
          onChangeText={setLawyerCat}
          value={LawyerCat}

        />
        <Text style={{fontSize:17,fontWeight:'500',paddingTop:10}}>Lawyer ID</Text>
        <TextInput
          placeholder="Valid Lawyer ID"
          placeholderTextColor={"black"}
          style={styles.InputField}
          onChangeText={setLawyerID}
          value={LawyerID}

        />
       <BasicButton Title="Register" navigation={navigation} onPress={handleSubmit}/>
      </View>
    </ScrollView>
  )
}

export default LawyerRegister

const styles = StyleSheet.create({
  InputField:{
    padding: 10,
    borderColor: "#d0d0d0",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 20,
  }
})