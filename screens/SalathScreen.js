import { ImageBackground, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Card, Text } from 'react-native-paper';

const SalathScreen = () => {
  const [datas,setDatas]=useState({})
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const dataFecht=async()=>{
    const res = await fetch(`https://api.aladhan.com/v1/timingsByAddress/${currentDate}?address=bangladesh`)
    const data = await res.json()
    setDatas(data)
  }
  useEffect(()=>{
    dataFecht()
  },[])
   let today=datas?.data?.timings;
  let hijri=datas?.data?.date.hijri

    let AsrPm=0
    if(today?.Asr>'12:00'){
       let a= today.Asr.split(':')
        let first=parseFloat(a[0]);
        let second=parseFloat(a[1]);
        let hour=first-12;
        AsrPm=`${hour}:${second}`
    }
    let SunsetPm=0
     if(today?.Sunset>'12:00'){
        let a= today.Sunset.split(':')
        let first=parseFloat(a[0]);
        let second=parseFloat(a[1]);
        let hour=first-12;
        SunsetPm=`${hour}:${second}`
    }
    let Maghrib=0
     if(today?.Maghrib>'12:00'){
        let a= today.Maghrib.split(':')
        let first=parseFloat(a[0]);
        let second=parseFloat(a[1]);
        let hour=first-12;
        Maghrib=`${hour}:${second}`
    }
    let Isha=0
     if(today?.Isha>'12:00'){
        let a= today.Isha.split(':')
        let first=parseFloat(a[0]);
        let second=parseFloat(a[1]);
        let hour=first-12;
        Isha=`${hour}:${second}`
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/img/salath-bg.jpg')}resizeMode='cover'style={styles.container}>
      <View style={styles.salthTimeWeper}>
        <View style={styles.pryerTitleView}>
          <Text style={styles.pryerTitle}>নামাজের সময়সূচি</Text>
        </View>
        {
          today?.Fajr?<>
           <View style={styles.cardWreper}>
          <View style={styles.cardItem}>
            <Text style={styles.woktoTitle}>ফজর শুরু</Text>
            <View style={styles.woktoBtn}>
              <Text style={styles.somay}>{today?.Fajr} {today?.Fajr<'12:00'?'AM':'PM'}</Text>
            </View>
          </View>
          <View style={styles.cardItem}>
            <Text style={styles.woktoTitle}>সূয্য উদয়</Text>
            <View style={styles.woktoBtn}>
              <Text style={styles.somay}>{today?.Sunrise} {today?.Sunrise<'12:00'?'AM':'PM'}</Text>
            </View>
          </View>
          <View style={styles.cardItem}>
            <Text style={styles.woktoTitle}>যোহর শুরু</Text>
            <View style={styles.woktoBtn}>
              <Text style={styles.somay}>{today?.Dhuhr} {today?.Dhuhr<'12:00'?'AM':'PM'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardWreper}>
          <View style={styles.cardItem}>
            <Text style={styles.woktoTitle}>আসর শুরু</Text>
            <View style={styles.woktoBtn}>
              <Text style={styles.somay}>{AsrPm} {today?.Asr<'12:00'?'AM':'PM'}</Text>
            </View>
          </View>
          <View style={styles.cardItem}>
            <Text style={styles.woktoTitle}>মাগরিব</Text>
            <View style={styles.woktoBtn}>
              <Text style={styles.somay}>{Maghrib} {today?.Maghrib<'12:00'?'AM':'PM'}</Text>
            </View>
          </View>
          <View style={styles.cardItem}>
            <Text style={styles.woktoTitle}>ইশা শুরু</Text>
            <View style={styles.woktoBtn}>
              <Text style={styles.somay}>{Isha} {today?.Isha<'12:00'?'AM':'PM'}</Text>
            </View>
          </View>
        </View>
          </>: <ActivityIndicator animating={true} size='large' color={'#009146'} />
        }
        <Text style={styles.pryerTitle}>আজকের আরবী তারিখ</Text>
       {
        hijri?
        <View style={styles.dateCardWreper}>
          <View style={styles.datecardItem}>
            <Text style={styles.dateTitle}>{hijri?.day} - {hijri?.month.en} / {hijri?.month.ar}</Text>
            <Text style={styles.dateTitle}>বার - {hijri?.weekday?.ar} / {hijri?.weekday?.en}</Text>
            <Text style={styles.dateTitle}>{hijri?.month?.number} মাস - {hijri?.year} হিজরী</Text>
          </View>
        </View>
        : <ActivityIndicator animating={true}size='large' color={'#009146'} />
       }
        
      </View>
      </ImageBackground>
    </View>
  )
}

export default SalathScreen

const styles = StyleSheet.create({
   container: {
        flex: 1,
    },
    salthTimeWeper:{
      padding:5
    },
    pryerTitleView:{
      alignItems:'center',
      // marginTop:10
    },
    pryerTitle:{
      color:'#fff',
      fontFamily:'NotoBenga',
      fontSize:28,
      textAlign:'center',
      marginTop:10
    },
    cardWreper:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:20,
    },
    cardItem:{
    borderColor:'#fff',
    borderWidth:1,
    padding:10,
    paddingVertical:20,
    alignItems:'center',
    borderRadius:10,
    minWidth:'31%'
    },
    woktoTitle:{
      color:'#fff',
      fontFamily:'NotoBenga',
      fontSize:24,
      borderBottomWidth:1,
      borderBottomColor:'#ccc'
    },
    woktoBtn:{
      width:'92%',
      height:50,
      backgroundColor:'#009146',
      alignItems:"center",
      justifyContent:'center',
      borderRadius:10,
      marginTop:20
    },
    somay:{
       color:'#fff',
      fontFamily:'NotoBenga',
      fontSize:18
    },
    dateCardWreper:{
      marginTop:15,
    },
    datecardItem:{
    borderColor:'#fff',
    borderWidth:1,
    padding:10,
    paddingVertical:20,
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#270059'
    },
    dateTitle:{
      color:'#fff',
      fontFamily:'NotoBenga',
      fontSize:22,
      textAlign:'left'
    }
})