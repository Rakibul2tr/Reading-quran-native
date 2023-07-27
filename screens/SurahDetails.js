import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const SurahDetails = ({route,navigation}) => {
  const { id } = route.params;
  const routeId=parseInt(id)
  const [data, setData] = useState([]);
  const [pageChange,setPageChange] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
  const resp = await fetch(`https://alquranbd.com/api/tafheem/suraData/${routeId}/${pageChange}`);
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
   }, [loading,pageChange]);

  const decrimentHendal=()=>{
    if(pageChange<1){
        return pageChange
    }
    let newID=pageChange-1
    setPageChange(newID)
  } 
  const incrimentHendal=()=>{
    let newID=pageChange+1
    setPageChange(newID)
  } 

 const renderItem = ({ item }) => { 
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.arabicAyath}>{item.ayah_text}</Text>
        <Text style={styles.ayathNumber}>{item.ayah_no}</Text>
        {
        item?.bn.map((data) => {
            return (
                <View key={data.token_no}>
                    <Text style={styles.arabicAyath}>{data.token_trans}</Text>
                </View>
            )
            })
        }
        
      </View>
    );
  };
  return (
    <View >
        <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:8}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.arrowbtn}>
         <AntDesign name="arrowleft" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={decrimentHendal} style={styles.arrowbtn}>
         <FontAwesome name="angle-left" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={incrimentHendal} style={styles.arrowbtn}>
            <FontAwesome name="angle-right" size={28} color="#fff" />
        </TouchableOpacity>
        </View>
        {
            pageChange==1&&<View style={{width:400,height:70}}>
            <Image source={require('../assets/img/besmillah.png')} style={{width:"100%",height:"100%",alignItems:'center'}}/>
        </View>
        }
        
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

export default SurahDetails

const styles = StyleSheet.create({
    itemContainer:{
    padding:10,
    paddingLeft:20,
    borderBottomWidth:1,
    borderBottomColor:'#672CBC',
    position:'relative'
  },
  arrowbtn:{
    backgroundColor:'#672CBC',
    paddingHorizontal:8,
    borderRadius:5
  },
  arabicAyath:{
    fontSize:20,
    fontFamily:"NotoBenga",
    
  },
  ayathNumber:{
    color:'#672CBC',
    width:40,
    height:40,
    borderRadius:100,
    textAlign:'center',
    lineHeight:40,
    borderWidth:2,
    borderColor:'#672CBC',
    fontFamily:'QuanticoB'
  }
})