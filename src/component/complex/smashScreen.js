
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

  let audio = { WRONG: Constant.GENERIC.WRONG_AUDIO, CORRECT: Constant.GENERIC.CORRECT_AUDIO}

  // WHEN EVER SHOW PROPS CHANGES
  useEffect(() => {
    if (props.show.enable) {
        Utils.playAudio(audio[props.show.audioType], 0.3);
        setTimeout(() => { 
          isShowModel({...show, enable: false});
        }, 1000);
    }
    console.log('Show / hide the model');
  }, [props.show.enable]);

  // RENDER HTML
  return (
    <>
      <Modal transparent={true} visible={show.enable}>
        <View style={styles.modelCenteredView}>
          <View style={styles.smashModalView}>
            <Icon name={show.icon} color={show.color} size={Setting.smashIconSize} type="font-awesome" underlayColor="transparent"/>
          </View>
        </View>
      </Modal>
        </>
    );
} 
