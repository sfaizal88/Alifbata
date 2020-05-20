
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
import { Icon } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Data from '../shared/data';
import * as Constant from '../shared/constant';
import * as Storage from '../shared/storage';
import * as Utils from '../shared/utils';
 
export const IntroScreen = ({navigation}) => {

    // USE EFFECT ON LOAD PROCESS
    useEffect(() => {
        //StatusBar.setHidden(true);
        // UPDATE STATUS COLOR
        StatusBar.setBarStyle('light-content');
        // HIDE SPLASH SCREEN ONCE PAGE LOADED
        // WHEN USER ALREADY VISITED INTRO AND CLOSED POPUP THEN HIDE THE SPLASH SCREEN
        Storage._retrieveData(Constant.STORAGE.VISITED).then(item => {
            console.log('Intro visited');
          // CHECKING WHEATHER USER ALREADY VISISTED THE INTRO AND HIDE POPUP
          // IF USER DONT VISITED THEN HIDE SPLASH SCREEN
          if (Utils.isNotEmpty(item)) {
            console.log('Moved from Intro to Dashboard');
            onFinished();
          }
        });
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
    * RIGHT ARROW CUSTOMISE BUTTON
    *
    * @input  NA
    * @return NA
    */
    const _renderNextButton = () => {
        return (
          <View style={[styles.buttonCircle, styles.buttonCircleLight]}>
            <Icon name="angle-right" iconStyle={[styles.nextBtn, styles.navDark]} size={30} type="font-awesome" underlayColor="transparent"></Icon>
          </View>
        );
    }

    /**
    * LEFT ARROW CUSTOMISE BUTTON
    *
    * @input  NA
    * @return NA
    */
    const _renderPrevButton = () => {
        return (
          <View style={[styles.buttonCircle, styles.buttonCircleLight]}>
            <Icon name="angle-left" iconStyle={[styles.prevBtn, styles.navDark]}  size={30} type="font-awesome" underlayColor="transparent"></Icon>
          </View>
        );
    }

    /**
    * DONE ARROW CUSTOMISE BUTTON
    *
    * @input  NA
    * @return NA
    */
    const _renderSkipButton = () => {
        return (
          <View style={[styles.buttonCircle, styles.buttonCircleLight, styles.buttonDone]}>
            <Text style={styles.doneBtn}>Skip</Text>
          </View>
        );
    }

    /**
    * DONE ARROW CUSTOMISE BUTTON
    *
    * @input  NA
    * @return NA
    */
    const _renderDoneButton = () => {
        return (
          <View style={[styles.buttonCircle, styles.buttonCircleLight, styles.buttonDone]}>
            <Text style={styles.doneBtn}>Done<Icon name="angle-left" iconStyle={[styles.prevBtn, styles.navDark]}  size={30} type="font-awesome" underlayColor="transparent"></Icon></Text>
          </View>
        );
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
        <AppIntroSlider 
            showPrevButton={true} 
            showSkipButton={true} 
            renderItem={generateItem} 
            data={Data.introSlides} 
            onDone={onFinished} 
            onSkip={onFinished}
            renderNextButton={_renderNextButton}
            renderPrevButton={_renderPrevButton}
            renderDoneButton={_renderDoneButton}
            renderSkipButton={_renderSkipButton}
        />
    </>
    );
};