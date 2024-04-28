import { View, Text, StyleSheet, Image, TouchableOpacity,Keyboard } from 'react-native';
import React, { useState,useEffect, useContext } from 'react';
import Menu from "../Menu";
import Bookings from '../Bookings';
import Profile from "../Profile";
import Corpus from "../Corpus"
import { UserType } from '../../Context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
const Default = ({navigation}) => {
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken =  jwt_decode(token);
      // const userId = decodedToken.userId;
      console.log(token);

      // axios
      //   .get(`http://localhost:8000/users/${userId}`)
      //   .then((response) => {
      //     setUsers(response.data);
      //   })
      //   .catch((error) => {
      //     console.log("error retrieving users", error);
      //   });
    };

    fetchUsers();
  }, []);
  const [selectedTab, setSelectedTab]= useState(0);
  return (
    <View style={styles.container}>
    {selectedTab==0?(
     <Menu navigation={navigation}/>
    ):selectedTab==1?(
      <Bookings navigation={navigation}/>
    )
    :selectedTab==2?(
      <Corpus navigation={navigation}/>
     )
     :(<Profile navigation={navigation}/>)}
      <View style={styles.bottomView}>
      <TouchableOpacity style={styles.bottomTab} 
        onPress={()=> {
        setSelectedTab(0);
      }}>
        <Image source={selectedTab==0? require('../../images/homefill.png'):require('../../images/home.png')} style={styles.bottomTabIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomTab}
      onPress={()=> {
        setSelectedTab(1);
      }}>
        <Image source={
          selectedTab==1? require('../../images/searchfill.png'):
          require('../../images/search.png')} style={styles.bottomTabIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomTab}
      onPress={()=> {
        setSelectedTab(2);
      }}>
        <Image source={
          selectedTab==2? require('../../images/robot2.png'):
          require('../../images/robot.png')} style={{width:30,height:30}}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomTab}
       onPress={()=> {
        setSelectedTab(4);
      }}>
        <Image source={selectedTab==4? require('../../images/userfill.png'):
        require('../../images/user.png')} style={styles.bottomTabIcon}></Image>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Default
const styles=StyleSheet.create({
  container :{
    flex:1,
  },
  bottomView:{
    position:'absolute',
    bottom:0,
    width:'100%',
    height:60,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  bottomTab:{
    width:'20%',
    height:'100%',
    marginLeft:'14%',
    justifyContent:'center',
    alignContent:'center',
  },
  bottomTabIcon:{
    width:24,
    height:24,
  }
});