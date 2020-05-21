/**
*
* App.js
* Main file use to trigger all navigation.
* org.reactjs.native.faizal88.alifbata
* @author - Faizal
* @date   - 2 May 2020
*
***/
import 'react-native-gesture-handler';
// REACT NATIVE IMPORT
import React, {useEffect, useState, useContext, useReducer} from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'

// ALL SHARED FILES
import { styles } from './src/shared/stylesheet';
import { Colors } from './src/shared/colors';
import * as Storage from './src/shared/storage';
import * as Constant from './src/shared/constant';
import * as Utils from './src/shared/utils';

// ALL CONTEXT FILES
import AppContext from './src/context/appContext';

// ALL REDUCER FILES
import {reducer} from './src/reducer/commonReducer';

// ALL NAVIGATION
import { HomeNavigation  } from './src/component/navigation/homeNavigator';
import { ChapterNavigation } from './src/component/navigation/chapterNavigator';
import { QuizNavigation } from './src/component/navigation/quizNavigator';
import {DashboardScreen} from './src/pages/dashboard';
import { BadgeScreen } from './src/pages/badge';
import { StepsNavigation } from './src/component/navigation/stepsNavigator';

// ALL COMPONENT FILES
import { IntroScreen  } from './src/pages/intro';

export default  App = ({navigation}) => {

  // DECLARE NAVIGATION
  const Stack = createStackNavigator();

  // DECLARE CONTEXT
  const appContextPayLoad = useContext(AppContext);

  // DECLARE REDUCER
  const [state, dispatch] = useReducer(reducer, {...appContextPayLoad});

  // LOCAL VARIABLE DECLARATION
  const navigatorConfig = {
    title: '',
    headerBackTitle: '',
    headerShown: false,
    gestureEnabled: false
  }

  const updateAppContext = (data) => {
    dispatch({
      type: Constant.TYPE.UPDATE_APP_CONTEXT,
      payload: data
    })
  }

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    //StatusBar.setHidden(true);
    // UPDATE STATUS COLOR
    StatusBar.setBarStyle('light-content');
    // COMMENTTED OUT HERE, TO AVOID FLICK WHILE LOGIN AUTH
  }, []);

  // RENDER HTML
  return (
    <>
      <AppContext.Provider value={{...state, updateAppContext}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Intro'}>
            <Stack.Screen name="Intro" component={IntroScreen}  options={{...navigatorConfig}}/>
            <Stack.Screen name="Home" component={DashboardScreen}  options={{...navigatorConfig}} />
            <Stack.Screen name="Chapter" component={ChapterNavigation}  options={{...navigatorConfig}} />
            <Stack.Screen name="QuizNavigation" component={QuizNavigation}  options={{...navigatorConfig}}/>
            <Stack.Screen name="Badge" component={BadgeScreen}  options={{...navigatorConfig}}/>
            <Stack.Screen name="StepsNavigation" component={StepsNavigation}  options={{...navigatorConfig}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
      </>
  );
}
