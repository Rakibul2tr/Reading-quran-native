import { StyleSheet, Text,  Dimensions, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pdf from 'react-native-pdf';
import { Feather } from '@expo/vector-icons';
import { Button, Dialog, Portal,ProgressBar,TextInput } from 'react-native-paper';

const HafeziQuran = () => {
     const source = { uri: 'https://qawmimadrasa.com/wp-content/uploads/2020/08/Imdadia-Hafezi-Quran.pdf', cache: true };
     const [loading,setLoading]=useState()
    const [page,setPage]=useState()
    const [visible, setVisible] =useState(false);
    const [para,setPara] =useState();
    const [prestha,setPrestha] =useState();

     const getPage=()=>{
        let sum=(parseInt(para)*20)-17
        let newSum=(sum+parseInt(prestha))-1
       setPage(newSum);
       setVisible(false)
     }
    
  console.log('loading',typeof(loading),loading);
  return (
     <View style={styles.container}>
        <View style={styles.searchbar}>
            <Text style={styles.searchText}>পারা এবং পৃষ্ঠা নং ‍দিয়ে খুজুন</Text>
            <TouchableOpacity style={styles.searchIcon}onPress={()=>setVisible(true)}>
              <Feather name="search" size={22} color="#672CBC" />
            </TouchableOpacity>
        </View>
         <Portal>
          <Dialog visible={visible} onDismiss={()=>setVisible(false)}>
            <Dialog.Title> আসসলামু আলাইকুম</Dialog.Title>
            <Dialog.Content>
              <View>
                <TextInput
                mode="outlined"
                label="পারা/Juz input"
                placeholder="পারা/Juz Number"
                onChangeText={(e)=>setPara(e)}
                keyboardType="numeric"
                />
                <TextInput
                mode="outlined"
                label="পৃষ্ঠা/Page input"
                placeholder="পৃষ্ঠা/Page Number"
                onChangeText={(e)=>setPrestha(e)}
                keyboardType="numeric"
                />
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={()=>setVisible(false)}>Cancel</Button>
              <Button onPress={getPage}>Done</Button>
            </Dialog.Actions>
          </Dialog>
         </Portal>
         {
            
            <Pdf
            trustAllCerts={false}
            source={source}
            onLoadComplete={(numberOfPages,filePath) => {
                setLoading(numberOfPages)
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page} ${numberOfPages}`);
            }}
            onLoadProgress= {(percent) => {
              <ProgressBar progress={percent} color='#672CBC' />
            }}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            page={page}
            minScale={1.0}
            maxScale={1.5}
            scale={1.0}
            enablePaging={true}
            horizontal={true}
            style={styles.pdf}/>
            
         }
        
    </View>
  )
}

export default HafeziQuran

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
    },
    searchbar:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-around',
     width:'80%'
    },
    searchText:{
    fontFamily:'NotoBenga',
    fontSize:20,
    color:'#672CBC',
    marginRight:10
    },
    searchIcon:{
     borderColor:'#672CBC',
     borderWidth:2,
     padding:5,
     borderRadius:100
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});