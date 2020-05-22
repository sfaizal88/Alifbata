
/**
*
* introModel.js
* Basic model popup
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {Text, View, TouchableHighlight, Modal, Image, FlatList} from 'react-native';
import { Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useIsFocused } from '@react-navigation/native';

// ICONS
import MedalIcon from '../../../assets/img/medal.png';
import WinnerIcon from '../../../assets/img/winner.png';
import StarIcon from '../../../assets/img/star.png';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Data from '../../shared/data';
import * as Constant from '../../shared/constant';
import * as Storage from '../../shared/storage';
import * as Utils from '../../shared/utils';

export const IntroModelPopup = (props) => {

  // THIS HOOK RETURNS `TRUE` IF THE SCREEN IS FOCUSED, `FALSE` OTHERWISE
  const isFocused = useIsFocused();

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // CHECK USER
    checkUserVisited();
  }, []);
    

  /**
  * Check wheather user visited
  *
  * @input  NA
  * @return NA
  */
  const checkUserVisited = () => {
    // HIDE SPLASH SCREEN ONCE PAGE LOADED
    // WHEN USER ALREADY VISITED INTRO AND CLOSED POPUP THEN HIDE THE SPLASH SCREEN
    Storage._retrieveData(Constant.STORAGE.VISITED).then(item => {
      // CHECKING WHEATHER USER ALREADY VISISTED THE INTRO AND HIDE POPUP
      // IF USER VISITED THEN HIDE SPLASH SCREEN
      if (Utils.isNotEmpty(item)) {
          props.handleClose();
      }
    });
  }

  /**
  * Feature use to check completed lesson
  *
  * @input  NA
  * @return NA
  */
  const close = () => {
    // SAVE IN MOBILE STORAGE
    Storage._storeData(Constant.STORAGE.VISITED, JSON.stringify(Constant.GENERIC.COMPLETED));
    // CLOSE POPUP
    props.handleClose();
  }


  // RENDER HTML
  return (
    <>
      <Modal animationType="slide" transparent={false} visible={props.show}>
        <View style={[styles.modelCenteredView]}>
          <Icon name="x" color={Colors.grayDarkest} containerStyle={styles.modelClose} size={40} type='octicon' onPress={() => close()} />
           <View style={[styles.modalView]}>
            <View  style={styles.modelTitleContainer}>
              <Text style={styles.modelTitle}>Assalamu Alaikum</Text>
            </View>
            <View style={[styles.modellBody]}>
              <Text style={[styles.modellText, styles.tCenter]}>Before we start the course, we would like to introduce about rewards and feature of the app. You will receive rewards, whenever you complete a chapter, lesson, quiz or game.</Text>
                <View style={[styles.rowDirection, styles.mt20, styles.modelTable]}>
                  <View style={[styles.w50, styles.centerView]}><Image source={WinnerIcon} style={{width: RFValue(30), height: RFValue(30)}}/></View>
                  <View style={[styles.flex1, styles.pl5]}><Text style={styles.modellSubText}>On completing a chapter, you will receive a <Text style={styles.darkHigh}>Trophy</Text> and a special <Text style={styles.darkHigh}>Badge.</Text></Text></View>
                </View>
                <View style={[styles.rowDirection, styles.modelTable]}>
                  <View style={[styles.w50, styles.centerView]}><Image source={MedalIcon} style={{width: RFValue(30), height: RFValue(30)}}/></View>
                  <View style={[styles.flex1, styles.pl5]}><Text style={styles.modellSubText}>On completing a lesson, you will receive a <Text style={styles.darkHigh}>Medal.</Text></Text></View>
                </View>
                <View style={[styles.rowDirection, styles.modelTable]}>
                  <View style={[styles.w50, styles.centerView]}><Image source={StarIcon} style={{width: RFValue(30), height: RFValue(30)}}/></View>
                  <View style={[styles.flex1, styles.pl5]}><Text style={styles.modellSubText}>For every correct answer, you will receive one <Text style={styles.darkHigh}>Star.</Text></Text></View>
                </View>
                <View style={[styles.rowDirection, styles.modelTable]}>
                  <View style={[styles.w50, styles.centerView]}><Icon name="volume-up" color={Colors.primary} size={35} type="font-awesome" underlayColor="transparent"/></View>
                  <View style={[styles.flex1, styles.pl5]}><Text style={styles.modellSubText}>While doing the lessons, click on this <Text style={styles.darkHigh}>audio icon</Text> to hear the audio again.</Text></View>
                </View>
            </View>
            <TouchableHighlight onPress={() => close()} style={[styles.btn, styles.primaryBtn]}>
              <Text style={styles.lightBtnText}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </>
    );
} 
