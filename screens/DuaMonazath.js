import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pdf from 'react-native-pdf';
import { ActivityIndicator, Button } from 'react-native-paper';

const DuaMonazath = ({ route, navigation }) => {
    const {name } = route.params;

    const [text, setText] =useState("");
    const [source,setSource]=useState({})
    const [page,setPage]=useState()
    const [correntPage,setCorrentPage]=useState()
    const [totalPage,setTotalPage]=useState()
    const monazath={uri:'https://ia801900.us.archive.org/30/items/duazikir/Munajate-Mokbul.pdf', cache: true}
    const neeker={uri:'https://ia601204.us.archive.org/32/items/islamibook2/Neker-Rotno-Vandar.pdf', cache: true}
    const Protidiner={uri:'https://ia801900.us.archive.org/30/items/duazikir/Protidiner-Nek-Amal.pdf', cache: true}
    const silahulMumin={uri:'https://ia601900.us.archive.org/30/items/duazikir/Silahul-Mumin(Almodina.com).pdf', cache: true}

   const loadData=()=>{
      if(name=='monazath'){
      setSource(monazath)
    }else if(name=='neeker'){
     setSource(neeker)
    }else if(name=='Protidiner'){
      setSource(Protidiner)
    }else if(name=='silahulMumin'){
      setSource(silahulMumin)
    }

   }
   useEffect(()=>{
    loadData()
   },[])
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
        {
        source?<>
         <Pdf
            trustAllCerts={false}
            source={source}
            onLoadComplete={(numberOfPages,filePath) => {
            }}
            onPageChanged={(page,numberOfPages) => {
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
            minScale={1.0}
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
        </>:<ActivityIndicator animating={true}size='large'color='#672CBC' />
        }
           
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