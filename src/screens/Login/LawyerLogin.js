const {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
  } = require("react-native");
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import { useEffect, useState } from "react";
  import axios from 'axios';
  
  function LoginPageLawyer({ props ,navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const userType="Lawyer"
    function handleSubmit() {
      console.log(email, password);
      const LawyerData = {
        email: email,
        password,
      };
  
      axios.post('http://192.168.176.78:5001/login-Lawyer', LawyerData).then(res => {
        console.log(res.data);
        if (res.data.status == 'ok') {
          Alert.alert('Logged In Successfull');
          navigation.navigate('Default');
        }
        else if(res.data.status == 'null'){
          Alert.alert("User doesn't exists!!");
        }
  
      });
    }
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"always"}
      >
        <View style={{ }}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../../assets/Logo/LegalXpertise 1.png")}
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.text_header}>Login !!!</Text>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#420475"
                style={styles.smallIcon}
              />
              <TextInput
                placeholder="Mobile or Email"
                style={styles.textInput}
                onChangeText={setEmail}
                value={email}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                onChangeText={setPassword}
                value={password}
              />
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginTop: 8,
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#420475", fontWeight: "700" }}>
                Forgot Password
              </Text>
            </View>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
              <View>
                <Text style={styles.textSign}>Log in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      <Text style={{fontSize:16,fontWeight:'500',alignSelf:'center',color:'blue'}} onPress={()=>navigation.navigate("LawyerRegister")}>Don't have account ? Register</Text>

      </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    mainContainer: {
    },
    textSign: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
    smallIcon: {
      marginRight: 10,
      fontSize: 24,
    },
    logoContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      height: 40,
      width: 300,
      marginTop: 50,
    },
    text_footer: {
      color: "#05375a",
      fontSize: 18,
    },
    action: {
      flexDirection: "row",
      paddingTop: 14,
      paddingBottom: 3,
      marginTop: 15,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: "#420475",
      borderRadius: 50,
    },
    textInput: {
      flex: 1,
      marginTop: -12,
      color: "#05375a",
    },
    loginContainer: {
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    header: {
      justifyContent: "flex-end",
      paddingHorizontal: 20,
    },
    text_header: {
      color: "#420475",
      fontWeight: "bold",
      fontSize: 30,
    },
    button: {
      alignItems: "center",
      marginTop: -20,
      alignItems: "center",
      textAlign: "center",
      margin: 20,
    },
    inBut: {
      width: "70%",
      backgroundColor: "#420475",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 50,
    },
  });
  export default LoginPageLawyer;
  