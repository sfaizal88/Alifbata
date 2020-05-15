/**
*
* homeNavigator.js
* Use to create navigation between home and Intro
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
import 'react-native-gesture-handler';
// REACT NATIVE IMPORT
import React, {useEffect, useState, useContext} from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';

// ALL SHARED FILES
import { styles } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';

// ALL COMPONENT FILES
import {ChapterNavigation} from './chapterNavigator';
import {AllSettingNavigation} from './settingNavigator';

// ALL MODULE PAGE FILES
import {DashboardScreen} from '../../pages/dashboard';
import {ChapterScreen} from '../../pages/chapter';
import {ProphetsScreen} from '../../pages/prophets';
import {QuranScreen} from '../../pages/quran';

export const HomeNavigation = (props) => {

  // DECLARE NAVIGATION
  const Tab = createMaterialBottomTabNavigator();
  
  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
      // UPDATE STATUS COLOR
      StatusBar.setBarStyle('light-content');
  }, []);

  // RENDER HTML
  return (
  <>
  <StatusBar backgroundColor={Colors.primary} />
  <Tab.Navigator
    initialRouteName="Home"
    backBehavior="initialRoute"
    activeColor={Colors.primary}
    inactiveColor={Colors.mText}
    barStyle={styles.mainNavBar}
    labeled= {true} 
    shifting = {false}>
    <Tab.Screen name="Home" component={DashboardScreen}
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> Home </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="home" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 23: 22} type='font-awesome'/>
        )
      }}
    />
    <Tab.Screen name="ChapterNavigation" component={ChapterNavigation}
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> All Chapter </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="book" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 23: 22} type='font-awesome'/>
        )
      }}
    />
    <Tab.Screen name="Prophets" component={ProphetsScreen} 
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> Prophets </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="user" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 25: 22} type='font-awesome'/>
        )
      }}
    />
    <Tab.Screen name="Quran" component={QuranScreen} 
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> Quran </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="accessibility" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 25: 22} />
        )
      }}
    />
    <Tab.Screen name="More" component={AllSettingNavigation} 
      options = {{
        tabBarLabel: <Text style={styles.mainNavBarText}> MORE </Text>,
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="more" focused={focused} color={focused ? Colors.primary : Colors.grayDark} size={focused? 25: 22}/>
        )
      }}
    />
  </Tab.Navigator>
  </>
  );
}