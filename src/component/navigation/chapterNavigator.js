/**
*
* chapterNavigator.js
* Use to create navigation between chapters
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../shared/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ALL MODULE PAGE FILES
import { ChapterScreen  } from '../../pages/chapter';
import { LessonScreen  } from '../../pages/lesson';
import { DetailsScreen  } from '../../pages/details';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';

export const ChapterNavigation = ({navigation}) => {
  
  // DECLARE NAVIGATION
  const Stack = createStackNavigator();

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // WHEN USER PRESS TAB, TRIGGER WILL OCCUR
    navigation.addListener('focus', () => {
      // LAND ON HOME PAGE
      navigation.navigate('Chapter');
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
      <Stack.Navigator initialRouteName={'Chapter'}
          screenOptions={{
            headerStyle: {...styles.stackHeader},
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            title: '',
            headerForceInset: { top: 'never', bottom: 'never' }
        }}>
        <Stack.Screen name="Chapter" component={ChapterScreen}  options={{...navConfig}} />
        <Stack.Screen name="Lesson" component={LessonScreen}    options={{...navConfig}} />
        <Stack.Screen name="Details" component={DetailsScreen}  options={{...navConfig}}/>
      </Stack.Navigator>
    </>
  );
}