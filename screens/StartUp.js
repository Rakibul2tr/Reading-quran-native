import { Image, SafeAreaView, View } from 'react-native'
import React, { useContext } from 'react'
import { Button, Text, useTheme } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyContext } from '../contextApi/Context';

const StartUp = ({navigation}) => {
 const {colors} = useTheme();
 const {isLogdin,setIsLogding} = useContext(MyContext);
 const sturupHendel=async()=>{
  try {
    if(isLogdin){
      navigation.navigate('Home')
    }else if(!isLogdin){
      navigation.navigate('Login')
    }
    } catch (e) {
        alert('Pleas give Currect value.')
    }
 }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <View style={{alignItems:'center',paddingVertical:50}}>
          <Text variant='headlineLarge'style={{color:colors.title,fontFamily:'QuanticoB'}}>Quran App</Text>
          <Text variant="labelMedium" style={{fontFamily:'QuanticoR'}}>Learn Quran and Recite once everyday</Text>
        </View>
        <View>
          <Image source={require('../assets/img/Start-bg.png')}alt='image bg' />
        </View>
        <View style={{width:150,marginTop:10}}>
          <Button labelStyle={{ color: "white", fontSize: 18,fontFamily:'QuanticoR' }}
           mode="contained" buttonColor='#F9B091' onPress={sturupHendel}>Get Start</Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default StartUp