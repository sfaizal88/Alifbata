/**
*
* stepsNavigator.js
* Use to create navigation between steps
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../shared/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ALL MODULE PAGE FILES
import { StepsListScreen  } from '../../pages/steps/stepsList';
import { StepsScreen } from '../../pages/steps/steps';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';

export const StepsNavigation = ({navigation}) => {
  
  // DECLARE NAVIGATION
  const Stack = createStackNavigator();

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // WHEN USER PRESS TAB, TRIGGER WILL OCCUR
    navigation.addListener('focus', () => {
      // LAND ON HOME PAGE
      navigation.navigate('StepsList');
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
    gestureDirection: 'horizontal'
  };
  

  // RENDER HTML
  return (
    <>
      <Stack.Navigator initialRouteName={'StepsList'}
          screenOptions={{
            headerStyle: {...styles.stackHeader},
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: '',
            headerForceInset: { top: 'never', bottom: 'never' },
        }}>

        <Stack.Screen name="Steps" component={StepsScreen}  options={{...navConfig}} />
        <Stack.Screen name="StepsList" component={StepsListScreen}  options={{...navConfig}} />
      </Stack.Navigator>
    </>
  );
}