
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

export const SmashScreen = (props) => {
  
  // COMPONENT OPTIONS
  const {
        animationType = "slide",
        transparent = true,
        show = {},
        isShowModel,
        content
  } = props

  let audio = { WRONG: require('../../../assets/audio/wrong.mp3'), CORRECT: require('../../../assets/audio/correct.mp3')}

  // WHEN EVER SHOW PROPS CHANGES
  useEffect(() => {
    if (props.show.enable) {
        playAudio(audio[props.show.audioType]);
        setTimeout(() => { 
          isShowModel({...show, enable: false});
        }, 1500);
    }
    console.log('Show / hide the model');
  }, [props.show.enable]);


  /**
  * PLAY AUDIO WHEN CLICK PLAY BUTTON
  *
  * @input  NA
  * @return NA
  */
  const playAudio = (path) => {
    // LOAD AUDIO BY URL
    var soundActive = new Sound(path,
      (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        // WHEN LOADED FULLY, PLAY THE AUDIO
        soundActive.play(() => {
          soundActive.release();
        });
      });
    }

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
