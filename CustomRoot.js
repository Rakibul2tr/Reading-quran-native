import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticStack from './navigations/AuthenticStack';


const Stack = createNativeStackNavigator();
const CustomRoot = () => {

  return (
      <NavigationContainer>
          <AuthenticStack/>
      </NavigationContainer>
  )
}

export default CustomRoot