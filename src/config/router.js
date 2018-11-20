import React,{Component} from 'react';
import {TouchableOpacity , Text} from 'react-native';
import { createBottomTabNavigator ,StackNavigator , createDrawerNavigator} from "react-navigation";
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import UserDetail from '../screen/UserDetail';
import Settings from '../screen/Settings'




export const Hometack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: {
      title: 'back to home',
    },
  }, 
});

export const Tabs = createBottomTabNavigator({
  HomeStack: {
    screen: Hometack,
  },
  Detail: {
    screen: Detail,
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: 'Settings',
      headerLeft: <TouchableOpacity underlayColor={"transparent"} onPress={()=>{navigation.dismiss() }} style={{marginLeft: 10}}><Text>back</Text></TouchableOpacity>,
    }),
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Settings',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

export const Drawer = createDrawerNavigator({
  Home: Home,
})
