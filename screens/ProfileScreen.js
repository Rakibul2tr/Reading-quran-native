import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MyContext } from '../contextApi/Context'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  const {setIsLogding} = useContext(MyContext);
  const [userData,setUserData]=useState({})
   const getAsyncData=async()=>{
      if(!(await AsyncStorage.getItem("user")) == true){
      return
      }else{
        const user=await AsyncStorage.getItem("user")
        const userPerse= JSON.parse(user)
        setUserData(userPerse);
      }
   }
   useEffect(()=>{getAsyncData()},[])

  const logOutHendale=async()=>{
     await AsyncStorage.removeItem('user');
     setIsLogding(false)
  }

  return (
    <View style={styles.container}>
      <View style={{marginBottom:20}}>
        <Avatar.Image size={120} source={require('../assets/img/profile-bg.png')} />
      </View>
      <View style={styles.InfoBox}>
        <Text style={styles.infotitle}>Your Profile</Text>
        <Text style={styles.Userinfo}>Name : {userData?.firstName} {userData?.lastName}</Text>
        <Text style={styles.Userinfo}>Phone Number : {userData?.phone}</Text>
      </View>
      <View style={styles.menuView}>
        <TouchableOpacity style={styles.menuItem}>
          <View >
            <AntDesign name="user" size={24} color='#672BBC' />
          </View>
          <View>
            <Text style={styles.Userinfo}>Profile Update</Text>
          </View>
          <View >
            <Feather name="edit" size={24} color='#672BBC' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}onPress={logOutHendale}>
          <View >
            <AntDesign name="logout" size={24} color='#672BBC' />
          </View>
          <View>
            <Text style={styles.Userinfo}>Sign Out</Text>
          </View>
          <View >
            <AntDesign name="arrowright" size={24} color='#672BBC' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
 
  InfoBox:{
    minHeight:150,
    marginTop:20

  },
  infotitle:{
    fontSize:30,
    textAlign:'center',
    borderBottomWidth:2,
    borderBottomColor:'#672BBC',
    marginBottom:10,
    fontFamily:'QuanticoB',
  },
  Userinfo:{
    fontSize:18,
    color:'#672BBC',
    fontFamily:'QuanticoR',
  },
  menuView:{
    width:'100%',
    // paddingHorizontal:15
  },
  menuItem:{
    borderWidth:1,
    borderColor:'#672BBC',
    flexDirection:'row',
    padding:10,
    justifyContent:'space-between',
    width:'80%',
    marginBottom:10,
    alignItems:'center',
    alignSelf:'center'
  }
})