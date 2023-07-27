import { Image, SafeAreaView, View } from 'react-native'
import React from 'react'
import { Button, Text, useTheme } from 'react-native-paper'

const StartUp = ({navigation}) => {
 const {colors} = useTheme();
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
           mode="contained" buttonColor='#F9B091' onPress={() =>navigation.navigate('StackHome')}>Get Start</Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default StartUp