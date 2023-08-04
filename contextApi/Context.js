import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

const MyContext=createContext();

 const ContextProvider=({children})=>{
        const [isLogdin,setIsLogding]=useState(false)
  const userStorage=async()=>{
    try {
   const userJson= await AsyncStorage.getItem('user');
    const user =JSON.parse(userJson);
    if(user!==null){
      setIsLogding(true)
    }else{
      setIsLogding(false)
    }
    } catch (e) {
        alert('Pleas give Currect value.')
    }
  }
  useEffect(()=>{userStorage()},[])

 const value={
    isLogdin,
    setIsLogding
  }

    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}
export {MyContext,ContextProvider}