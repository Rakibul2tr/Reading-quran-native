
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartUp from '../screens/StartUp';


const Stack = createNativeStackNavigator();
const AuthenticStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="Start" component={StartUp} />
    </Stack.Navigator>
  )
}

export default AuthenticStack