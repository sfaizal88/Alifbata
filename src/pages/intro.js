
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

// ICONS
import MedalIcon from '../../assets/img/medal.png';
import WinnerIcon from '../../assets/img/winner.png';
import StarIcon from '../../assets/img/star.png';

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
          // CHECKING WHEATHER USER ALREADY VISISTED THE INTRO AND HIDE POPUP
          // IF USER DONT VISITED THEN HIDE SPLASH SCREEN
          if (Utils.isNotEmpty(item)) {
            onFinished();
          } else {
            SplashScreen.hide();
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
    const generateItem = ({ item, index }) => {
        if (!item.isLastPage) {
            return (
              <View style={{...styles.slide, backgroundColor: item.backgroundColor}}>
                <Text style={{...styles.slideTitle, color: item.color}}>{item.title}</Text>
                <View style={styles.slideImageContainer}><Image source={item.image} style={styles.slideImage}/></View>
                <Text style={{...styles.slideDesc, color: item.color}}>{item.text}</Text>
              </View>
            );
        } else if (item.isLastPage) {
            return (
                <View style={{...styles.slide, ...styles.slideNoShadow, ...styles.ph20, backgroundColor: item.backgroundColor}}>
                    <View  style={styles.modelTitleContainer}>
                    <Text style={{...styles.modelTitle, color: item.color}}>Assalamu Alaikum</Text>
                    </View>
                    <View style={[styles.modellBody]}>
                      <Text style={{...styles.modellText, ...styles.tCenter, color: item.color}}>Before we start the course, we would like to introduce the rewards and features of the app. You will receive rewards, whenever you complete a chapter, lesson, quiz or game.</Text>
                        <View style={[styles.rowDirection, styles.mt20, styles.modelTable, styles.modelTableDark]}>
                          <View style={[styles.w50, styles.centerView]}><Image source={WinnerIcon} style={styles.img30}/></View>
                          <View style={[styles.flex1, styles.pl5]}>
                            <Text style={{...styles.modellSubText, color: item.color}}>On completing a chapter, you will receive a <Text style={{...styles.darkHigh, color: item.color}}>Trophy</Text> and a special <Text style={{...styles.darkHigh, color: item.color}}>Badge.</Text></Text></View>
                        </View>
                        <View style={[styles.rowDirection, styles.modelTable, styles.modelTableDark]}>
                          <View style={[styles.w50, styles.centerView]}><Image source={MedalIcon} style={styles.img30}/></View>
                          <View style={[styles.flex1, styles.pl5]}><Text style={{...styles.modellSubText, color: item.color}}>On completing a lesson, you will receive a <Text style={{...styles.darkHigh, color: item.color}}>Medal.</Text></Text></View>
                        </View>
                        <View style={[styles.rowDirection, styles.modelTable, styles.modelTableDark]}>
                          <View style={[styles.w50, styles.centerView]}><Image source={StarIcon} style={styles.img30}/></View>
                          <View style={[styles.flex1, styles.pl5]}><Text style={{...styles.modellSubText, color: item.color}}>For every correct answer, you will receive one <Text style={{...styles.darkHigh, color: item.color}}>Star.</Text></Text></View>
                        </View>
                        <View style={[styles.rowDirection, styles.modelTable, styles.modelTableDark]}>
                          <View style={[styles.w50, styles.centerView]}><Icon name="volume-up" color={Colors.white} size={35} type="font-awesome" underlayColor="transparent"/></View>
                          <View style={[styles.flex1, styles.pl5]}><Text style={{...styles.modellSubText, color: item.color}}>While doing the lessons, click on this <Text style={{...styles.darkHigh, color: item.color}}>audio icon</Text> to hear the audio again.</Text></View>
                        </View>
                    </View>
                </View>
            );
        }
    }
    
    return (
    <>  
        <AppIntroSlider 
            showPrevButton={true} 
            showSkipButton={false} 
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