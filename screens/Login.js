import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyContext } from '../contextApi/Context';

const Login = ({navigation}) => {
    const {setIsLogding} = useContext(MyContext);
    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        phone:'',

    })
   const {firstName,lastName,phone}=formData; 
   const signUpHendel=async()=>{
    console.log('from data',formData);
    try {
    const userJson = JSON.stringify(formData);
        await AsyncStorage.setItem('user', userJson);
        navigation.navigate('Start')
        setIsLogding(true)
    } catch (e) {
        alert('Pleas give Currect value.')
    }
   }
  return (
    <View style={styles.container}>
    <View style={{width:'100%',alignItems:'center'}}>
      <Text style={styles.title}>Create Your Account</Text>
      <View style={styles.formWreper}>
        <View style={styles.inputItem}>
            <TextInput
            label="First Name"
            value={firstName}
            onChangeText={(e) => setFormData({...formData,firstName:e})}
            />
        </View>
        <View style={styles.inputItem}>
            <TextInput
            label="Last Name"
            value={lastName}
            onChangeText={(e) => setFormData({...formData,lastName:e})}
            />
        </View>
        <View style={styles.inputItem}>
            <TextInput
            label="Phone Number"
            keyboardType='numeric'
            value={phone}
            onChangeText={(e) => setFormData({...formData,phone:e})}
            />
        </View>
        <Button buttonColor="#fff" mode="outlined" onPress={signUpHendel}>Create Account</Button>
      </View>
    </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:25,
        fontFamily:'QuanticoB',
        marginBottom:20
    },
    formWreper:{
        width:'80%'
    },
    inputItem:{
        marginBottom:10,
        backgroundColor:'#fff'
    }
})