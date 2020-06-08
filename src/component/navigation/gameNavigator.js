/**
*
* gameNavigator.js
* Use to create navigation between game
*
* @author - Faizal
* @date   - 26 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect} from 'react';
import { Text, View, Image } from 'react-native';
import { Colors } from '../../shared/colors';
import { Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL ICON
import BackIcon from '../../../assets/img/back.png';

// ALL MODULE PAGE FILES
import { GameListScreen  } from '../../pages/game/gameList';
import { HeadsupGameScreen } from '../../pages/game/headsup';
import { RunnerGameScreen } from '../../pages/game/runner';
import { HeadsupScoreScreen } from '../../pages/game/headsupScore';
import { MissingLetterScreen } from '../../pages/game/missingLetter';
import { MissingLetterScoreScreen } from '../../pages/game/missingLetterScore';
//import { SpinnerScreen } from '../../pages/game/spinner';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';

export const GameNavigation = ({navigation}) => {
  
  // DECLARE NAVIGATION
  const Stack = createStackNavigator();

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // WHEN USER PRESS TAB, TRIGGER WILL OCCUR
    navigation.addListener('focus', () => {
      // LAND ON HOME PAGE
      navigation.navigate('GameList');
    });
  }, []);

  // LOCAL VARIABLE DECLARATION
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const navConfig = {
    headerTitleAlign: 'left', 
    headerTintColor: Colors.white,
    title: '',
    headerBackTitle: '',
    headerBackTitleVisible: false,
    headerTransparent: true,
    headerLeftContainerStyle: styles.stackheaderLeftContainer,
    animationEnabled: true,
    transitionSpec: {
      open: config,
      close: config,
    },
    gestureEnabled: false
  };

  // RENDER HTML
  return (
    <>
      <Stack.Navigator initialRouteName={'GameList'}
          screenOptions={{
            headerStyle: {...styles.stackHeader},
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: '',
            headerForceInset: { top: 'never', bottom: 'never' }
        }}>
        <Stack.Screen name="MissingLetter" component={MissingLetterScreen}  options={{...navConfig}} />
        <Stack.Screen name="MissingLetterScore" component={MissingLetterScoreScreen}  options={{...navConfig, headerLeft: null}} />
        <Stack.Screen name="HeadsupScore" component={HeadsupScoreScreen}  options={{...navConfig}} />
        <Stack.Screen name="HeadsupGame" component={HeadsupGameScreen}  options={{...navConfig}} />
        <Stack.Screen name="RunnerGame" component={RunnerGameScreen}  options={{...navConfig}} />
        <Stack.Screen name="GameList" component={GameListScreen}  options={{...navConfig}} />
      </Stack.Navigator>
    </>
  );
}
/*<Stack.Screen name="Spinner" component={SpinnerScreen}  options={{...navConfig}} />*/