/**
*
* quizNavigator.js
* Use to create navigation between quiz
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
import { QuizListScreen  } from '../../pages/quiz/quizList';
import { QuizScreen } from '../../pages/quiz';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';

export const QuizNavigation = ({navigation}) => {
  
  // DECLARE NAVIGATION
  const Stack = createStackNavigator();

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // WHEN USER PRESS TAB, TRIGGER WILL OCCUR
    navigation.addListener('focus', () => {
      // LAND ON HOME PAGE
      navigation.navigate('QuizList');
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
    }
  };
  

  // RENDER HTML
  return (
    <>
      <Stack.Navigator initialRouteName={'QuizList'}
          screenOptions={{
            headerStyle: {...styles.stackHeader},
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: '',
            headerForceInset: { top: 'never', bottom: 'never' },
            gestureDirection: 'vertical-inverted'
        }}>

        <Stack.Screen name="Quiz" component={QuizScreen}  options={{...navConfig}} />
        <Stack.Screen name="QuizList" component={QuizListScreen}  options={{...navConfig}} />
      </Stack.Navigator>
    </>
  );
}