/**
*
* sound.js
* Declare all application utils
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { Alert, View, Text } from 'react-native';
import Sound from 'react-native-sound';

// ALL SHARED FILES
import * as Constant from './constant';
import * as Utils from './utils';

/**
* PLAY AUDIO WHEN CLICK PLAY BUTTON
*
* @input  NA
* @return NA
*/
export const mainMenuClicked = () => {
	// PLAY THE CLICK AUDIO
	playAudio(Constant.GENERIC.MENU_CLICK_AUDIO, 0.1);
}

/**
* PLAY AUDIO WHEN CLICK PLAY BUTTON
*
* @input  NA
* @return NA
*/
const playAudio = (path, volume = 1) => {
  	// LOAD AUDIO BY URL
  	let soundActive = new Sound(path,
    	(error, sound) => {
      	if (error) {
        	console.log('error' + error.message);
        	return;
      	}
		// WHEN LOADED FULLY, PLAY THE AUDIO
		soundActive.setVolume(volume).play(() => {
			soundActive.release();
		});
    });
}