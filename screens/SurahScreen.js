import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native-paper';

const SurahScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
   const fetchData = async () => {
    const resp = await fetch("https://alquranbd.com/api/tafheem/sura/list");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
   }, [loading]);
  const renderItem = ({index, item }) => {
      let suraIndex=index+1
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.surahWreper} onPress={()=>navigation.navigate('Surah detail',{id:item.id})}>
          <View style={styles.imageBox}>
            <Image source={require('../assets/img/bage.png')} style={{width:50,height:50}} alt='bage image'/>
            <Text style={styles.suraNumber}>{suraIndex}</Text>
          </View>
          <Text style={styles.suraName}>{item.name}</Text>
        </TouchableOpacity>
        
      </View>
    );
  };
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.titleName}>সূরার নাম</Text>
       {loading && <ActivityIndicator animating={true}size='large'color='#672CBC' />}
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  )
}

export default SurahScreen

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
    justifyContent:'center',
    width:'100%',
  },
  itemContainer:{
    padding:10,
    paddingLeft:20,
    borderBottomWidth:1,
    borderBottomColor:'#672CBC'
  },
  surahWreper:{
    flexDirection:'row',
    alignItems:'center',
  },
  imageBox:{
    position:'relative',
    alignItems:'center',
    justifyContent:'center',

  },
  suraNumber:{
    position:'absolute',
    fontSize:18,
    color:'#672CBC',
    fontFamily:'QuanticoB'
  },
  suraName:{
    fontSize:22,
    marginLeft:20,
    fontFamily:"NotoBenga"
  },
  titleName:{
    fontSize:28,
    fontFamily:"NotoBenga",
    textAlign:'center',
    backgroundColor:'#672CBC',
    color:'#fff'
  }
})