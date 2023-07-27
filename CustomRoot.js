import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './navigations/TabNavigation';
import AuthenticStack from './navigations/AuthenticStack';


const Stack = createNativeStackNavigator();
const CustomRoot = () => {
  let user=true;
  return (
    <NavigationContainer>
      {
        user?<TabNavigation/>:<AuthenticStack/>
      }
      
    </NavigationContainer>
  )
}

export default CustomRoot