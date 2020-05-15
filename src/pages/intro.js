
// REACT NATIVE IMPORT
/**
*
* intro.js
* App Intro Component
*
* @author - Faizal
* @date   - 27 April 2020
*
***/
import React, {useState, useEffect} from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Data from '../shared/data';
import * as Constant from '../shared/constant';
import * as Storage from '../shared/storage';
 
export const IntroScreen = ({navigation}) => {

    // USE EFFECT ON LOAD PROCESS
    useEffect(() => {
      // UPDATE STATUS COLOR
      StatusBar.setBarStyle('light-content');
    }, []);

    /**
    * Move to last slide
    *
    * @input  NA
    * @return NA
    */
    const onFinished = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        navigation.navigate('Home');
    }

    /**
    * Feature used to generate each slide
    *
    * @input  Object - Slider object
    * @return Tags
    */
    const generateItem = ({ item }) => {
        return (
          <View style={{...styles.slide, backgroundColor: item.backgroundColor}}>
            <Text style={{...styles.slideTitle, color: item.color}}>{item.title}</Text>
            <View style={styles.slideImageContainer}><Image source={item.image} style={styles.slideImage}/></View>
            <Text style={{...styles.slideDesc, color: item.color}}>{item.text}</Text>
          </View>
        );
    }
    
    // RENDER HTML
    return (
    <>  
        <AppIntroSlider showPrevButton={true} showSkipButton={true} renderItem={generateItem} data={Data.introSlides} onDone={onFinished} onSkip={onFinished}/>
    </>
    );
};