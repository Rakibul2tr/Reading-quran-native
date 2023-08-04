
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartUp from '../screens/StartUp';
import Login from '../screens/Login';
import TabNavigation from './TabNavigation';
import { MyContext } from '../contextApi/Context';


const Stack = createNativeStackNavigator();
const AuthenticStack = () => {
 const {isLogdin} = useContext(MyContext);
 console.log('context',isLogdin);

  return (
    <Stack.Navigator>
      {
        isLogdin?<>
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="HomeScreen" component={TabNavigation} />
        </>:
        <>
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="Start" component={StartUp} />
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="Login" component={Login} />
        </>
      }
        
        
    </Stack.Navigator>
  )
}

export default AuthenticStack