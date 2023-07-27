import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartUp from '../screens/StartUp';
import HomeScreen from '../screens/HomeScreen';
import HafeziQuran from '../screens/HafeziQuran';
import SurahScreen from '../screens/SurahScreen';
import SurahDetails from '../screens/SurahDetails';
import DuaMonazath from '../screens/DuaMonazath';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="Hafezi" component={HafeziQuran} />
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="Surah Name" component={SurahScreen} />
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="Surah detail" component={SurahDetails} />
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="dua monazath" component={DuaMonazath} />
    </Stack.Navigator>
  )
}

export default StackNavigation