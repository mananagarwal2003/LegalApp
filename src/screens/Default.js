import { View, Text, StyleSheet, Image, TouchableOpacity,Keyboard } from 'react-native';
import React, { useState,useEffect } from 'react';
import Menu from "../screens/Menu";
import Bookings from './Bookings';
import Profile from "../screens/Profile";
import Corpus from "../screens/Corpus"
const Default = () => {
  const [selectedTab, setSelectedTab]= useState(0);
  return (
    <View style={styles.container}>
    {selectedTab==0?(
     <Menu/>
    ):selectedTab==1?(
      <Bookings/>
    )
    :selectedTab==2?(
      <Corpus/>
     )
     :(<Profile/>)}
      <View style={styles.bottomView}>
      <TouchableOpacity style={styles.bottomTab} 
        onPress={()=> {
        setSelectedTab(0);
      }}>
        <Image source={selectedTab==0? require('../images/homefill.png'):require('../images/home.png')} style={styles.bottomTabIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomTab}
      onPress={()=> {
        setSelectedTab(1);
      }}>
        <Image source={
          selectedTab==1? require('../images/searchfill.png'):
          require('../images/search.png')} style={styles.bottomTabIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomTab}
      onPress={()=> {
        setSelectedTab(2);
      }}>
        <Image source={
          selectedTab==2? require('../images/searchfill.png'):
          require('../images/search.png')} style={styles.bottomTabIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomTab}
       onPress={()=> {
        setSelectedTab(4);
      }}>
        <Image source={selectedTab==4? require('../images/userfill.png'):
        require('../images/user.png')} style={styles.bottomTabIcon}></Image>
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