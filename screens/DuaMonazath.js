import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Pdf from 'react-native-pdf';
import NeekAmalPdf from '../assets/img/Neker-Rotno-Vandar-rifbbt.pdf'
import zekirPdf from '../assets/img/Munajate-Mokbul.pdf'
import { Button } from 'react-native-paper';

const DuaMonazath = ({ route, navigation }) => {
    const {name } = route.params;
    const [text, setText] =useState("");
    const [page,setPage]=useState()
    const [correntPage,setCorrentPage]=useState()
    const [totalPage,setTotalPage]=useState()
  const selctedPage=()=>{
    if(parseInt(text)< totalPage){
        setPage(parseInt(text)+1)
        setText('')
    }else{
        alert('সঠিক পৃষ্ঠা নং দিন ।')
        return text
    }
  }

  return (
    <View style={styles.container}>
            <Pdf
            trustAllCerts={false}
            source={name=='monazath'?zekirPdf:NeekAmalPdf}
            onLoadComplete={(numberOfPages,filePath) => {
                console.log('succesfully load',numberOfPages);
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page} ${numberOfPages}`);
                setCorrentPage(page)
                setTotalPage(numberOfPages)
            }}
        
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            page={page}
            fitPolicy={2}
            minScale={0.5}
            scale={1.0}
            style={styles.pdf}/>
        
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'100%',height:50,backgroundColor:'#672CBC'}}>
            <Text style={{color:'#fff',fontFamily:'QuanticoB'}}>{correntPage} / {totalPage}</Text>
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
                keyboardType='numeric'
                placeholder='পৃষ্ঠা নং দিন'
                placeholderTextColor='#fff'
                style={{width:'25%',borderBottomWidth:1,borderBottomColor:'#fff',color:'#fff',textAlign:'center'}}
            />
            <Button mode="outlined"textColor="#fff"  onPress={selctedPage}>Ok</Button>
        </View>
    </View>
  )
}

export default DuaMonazath

const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
     pdf: {
        flex:10,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})