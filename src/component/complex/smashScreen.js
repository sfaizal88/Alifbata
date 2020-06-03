
/**
*
* model.js
* Basic model popup
*
* @author - Faizal
* @date   - 6 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {Text, View, TouchableHighlight, Modal} from 'react-native';
import { Icon } from 'react-native-elements';
import Sound from 'react-native-sound';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import { Setting } from '../../shared/setting';
import * as Constant from '../../shared/constant';
import * as Utils from '../../shared/utils';

export const SmashScreen = (props) => {
  
  // COMPONENT OPTIONS
  const {
        animationType = "slide",
        transparent = true,
        show = {},
        isShowModel,
        content
  } = props

  let smashData = { 
    WRONG: {
      audio: Constant.GENERIC.WRONG_AUDIO,
      icon: 'remove',
      color: Colors.white, 
      bgColor: Colors.red,
      type: 'ICON',
      word: ''
    }, 
    CORRECT: {
      audio: Constant.GENERIC.CORRECT_AUDIO,
      icon: 'check', 
      color: Colors.white,
      bgColor: Colors.green,
      type: 'ICON',
      word: ''
    },
    PASS: {
      audio: Constant.GENERIC.WRONG_AUDIO,
      icon: 'lock',
      color: Colors.white, 
      bgColor: Colors.gold,
      type: 'WORD',
      word: 'PASS'
    }, 
    GAMEOVER: {
      audio: Constant.GENERIC.WRONG_AUDIO,
      icon: 'remove',
      color: Colors.white, 
      bgColor: Colors.red,
      type: 'WORD',
      word: 'GAME OVER'
    }, 
    HEADSUP_PASS: {
      audio: Constant.GENERIC.WRONG_AUDIO,
      icon: 'lock',
      color: Colors.white, 
      bgColor: Colors.gold,
      type: 'WORD',
      word: 'PASS',
      desc: 'Hold device upright (vertical) to continue'
    }, 
  }

  // WHEN EVER SHOW PROPS CHANGES
  useEffect(() => {
    if (props.show.enable) {
        Utils.playAudio(smashData[props.show.type].audio, 0.3);
        setTimeout(() => { 
          isShowModel({...show, enable: false});
        }, 1000);
    }
  }, [props.show.enable]);

  // RENDER HTML  transparent={true}
  return (
    <Modal animationType={'fade'} presentationStyle={'fullScreen'} visible={show.enable} supportedOrientations={['portrait', 'landscape', 'landscape-left', 'landscape-right']}>
      <View style={[styles.modelCenteredView, {backgroundColor: smashData[props.show.type].bgColor ? smashData[props.show.type].bgColor : Colors.gold}]}>
        <View style={[styles.smashModalView, styles.centerView]}>
          <Icon iconStyle={[smashData[props.show.type].type === 'ICON' ? '' : styles.displayN]} name={smashData[props.show.type].icon} color={smashData[props.show.type].color} size={Setting.smashIconSize} type="font-awesome" underlayColor="transparent"/>
          
          <Text style={[smashData[props.show.type].type === 'WORD' ? '' : styles.displayN, styles.smashLabel, styles.centerView]}>{smashData[props.show.type].word}</Text>
          <Text style={[smashData[props.show.type].type === 'WORD' && smashData[props.show.type].desc ? '' : styles.displayN, styles.smashDesc, styles.centerView]}>{smashData[props.show.type].desc}</Text>

        </View>
      </View>
    </Modal>
  );
} 
