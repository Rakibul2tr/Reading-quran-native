import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Dialog, Portal, useTheme } from 'react-native-paper';
import { SimpleLineIcons } from '@expo/vector-icons';



const HomeScreen = ({navigation}) => {
  const [visible, setVisible] =useState(false);
// date start
  const day =new Intl.DateTimeFormat('ar-FR-u-ca-islamic',
  {day: 'numeric',month: 'long'}).format(Date.now());

  const weekday=new Intl.DateTimeFormat('ar-FR-u-ca-islamic', 
  {weekday: 'long'}).format(Date.now());
  
  const year =new Intl.DateTimeFormat('ar-FR-u-ca-islamic', 
  {year : 'numeric'}).format(Date.now());
  // date end
  const {colors} = useTheme();
 const selected=(name)=>{
  if(name=='monazath'){
    console.log('monazath',name);
    navigation.navigate('dua monazath',{name:'monazath'})
    setVisible(false)
  }else if(name=='neeker'){
    console.log('neeker',name);
     navigation.navigate('dua monazath',{name:'neeker'})
     setVisible(false)
  }
  
 }
 
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.header}>
            <Text variant='headlineLarge'style={{color:colors.secondary,fontFamily:'QuanticoB',textAlign:'center',fontSize:22}}>Quran App</Text>
        </View>
        <View style={styles.containerWreper}>
         <View style={styles.nameTitle}>
          <Text variant='headlineLarge'style={{fontFamily:'QuanticoR'}}>Asslamualaikum</Text>
          <Text style={[styles.name,{color:colors.primary}]}>Md:Rakibul Islam</Text>
          </View>
          <View style={styles.homeBenner}>
            <ImageBackground source={require('../assets/img/home-bg.png')}resizeMode="stretch"style={styles.bgImage}>
              <View style={{margin:10}}>
                <Text style={[styles.name,{color:colors.secondary}]}>আজকের তারিখ</Text>
                <Text style={[styles.name,{color:colors.secondary}]}>{day},</Text>
                <Text style={[styles.name,{color:colors.secondary}]}>{weekday},</Text>
                <Text style={[styles.name,{color:colors.secondary}]}>{year} সন</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginHorizontal:50}}>
            <TouchableOpacity style={styles.btnStayle} onPress={()=>navigation.navigate('Hafezi')}>
              <SimpleLineIcons name="book-open" size={22} color="#999" />
              <Text  style={styles.btnLable}>হাফেজী কোরআন</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btnStayle,styles.btnPosition]}onPress={()=>navigation.navigate('Surah Name')}>
              <Image source={require('../assets/img/Icon.png')}/>
              <Text  style={styles.btnLable}>কোরআন তরজমা</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnStayle}onPress={()=>setVisible(true)}>
              <Image source={require('../assets/img/Icon-dua.png')}/>
              <Text  style={styles.btnLable}>দোয়া ও মোনাজাত</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      {/* modal box */}
        <Portal>
          <Dialog visible={visible} onDismiss={()=>setVisible(false)}>
            <Dialog.Title>যে কোন একটি নির্বাচন করুন</Dialog.Title>
            <Dialog.Content>
              <TouchableOpacity onPress={()=>selected('monazath')}>
                <Text style={styles.modalbookTitle}>মোনাজাতে মাকবুল ও হিজবুল বাহার</Text>
                </TouchableOpacity>
              <TouchableOpacity  onPress={()=>selected('neeker')}>
                <Text style={styles.modalbookTitle}>নেকের রত্ন ভান্ডার</Text>
                </TouchableOpacity>
            </Dialog.Content>
          </Dialog>
        </Portal>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  header:{
    alignItems:'center',
    paddingHorizontal:10,
    paddingVertical:20,
    backgroundColor:'#672CBC',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    flex:1
  },
  containerWreper:{
    paddingHorizontal:10,
    backgroundColor:'#fff',
    flex:20,
  },
  nameTitle:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20,
  },
  name:{
    fontFamily:'QuanticoB',
    fontSize:20
  },
  homeBenner:{
    width:"100%",
    maxHeight:180,
    
  },
  bgImage:{
    width:"100%",
    height:'100%',
    
  },
  btnStayle:{
    backgroundColor:'#672CBC',
    width:110,
    height:110,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    borderColor:'#a167f5',
    borderWidth:5,
  },
  btnLable:{
    color:'#fff',
    fontFamily:'NotoBenga',
    textAlign:'center',
    fontSize:12,
    padding:5
  },
  btnPosition:{
    position:'relative',
    bottom:70
  },
  modalbookTitle:{
    fontFamily:'NotoBenga',
    fontSize:18,
    paddingVertical:10,
    borderBottomColor:'#a167f5',
    borderBottomWidth:1,
  }
})
export default HomeScreen