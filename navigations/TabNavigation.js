import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import ProfileScreen from '../screens/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import SalathScreen from '../screens/SalathScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {

   const getTabBarVisibility = (route) => {
     const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              
        if (routeName === 'Hafezi'||routeName === 'Surah detail'||routeName === 'dua monazath') {
        return { display: "none" }
        }
        return {
            height:60,
            backgroundColor:'#672CBC'
        }
    };
  const screenOptions={
         tabBarStyle: { 
          height:60,
          backgroundColor:'#672CBC'
          },
         tabBarHideOnKeyboard:true,
         tabBarIconStyle:{
             backgroundColor:'#fff'
            }
        }
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
       options={({ route }) => ({
           tabBarInactiveTintColor:'#7962AE',
            tabBarActiveTintColor:'#fff',
            tabBarShowLabel:false,
            headerShown:false,
            animation:'slide_from_right',
             tabBarIcon:({color,size})=>(<View style={[styles.salathIcon,{borderColor:color}]}>
              <AntDesign name="home" size={size} color={color} />
            </View>
             ),
            tabBarStyle: getTabBarVisibility(route)
            })}
      name="StackHome" component={StackNavigation} />
      <Tab.Screen
      options={{
            headerShown:false,
            animation:'slide_from_right',
            tabBarIcon:({color,size})=>( <View style={[styles.salathIcon,{backgroundColor:'#672CBC',borderColor:color}]}>
              <Image source={require('../assets/img/Icon-slath.png')}/>
            </View>),
            tabBarShowLabel:false,
            tabBarInactiveTintColor:'#7962AE',
            tabBarActiveTintColor:'#fff'
        }}
       name="salath" component={SalathScreen} />

      <Tab.Screen
      options={{
            headerShown:false,
            animation:'slide_from_right',
            tabBarIcon:({color,size})=>( <View style={[styles.salathIcon,{borderColor:color}]}>
              <AntDesign name="user" size={size} color={color} />
            </View>),
            tabBarShowLabel:false,
            tabBarInactiveTintColor:'#7962AE',
            tabBarActiveTintColor:'#fff'
        }}
       name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  salathIcon:{
    backgroundColor:'#672CBC',
    width:60,
    height:60,
    borderRadius:100,
    borderColor:'#7962AE',
    borderWidth:5,
    alignItems:'center',
    justifyContent:'center'
  }
})