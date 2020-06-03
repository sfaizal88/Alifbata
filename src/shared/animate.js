/**
*
* animate.js
* Declare all animate class
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';
import { Animated } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL SHARED FILES
import * as Constant from './constant';
import * as Utils from './utils';

/**
* Fade In Out animation
* @input  NA
* @return NA
*/
export const fadeInOutCountDown = (item) => {
	Utils.playAudio(Constant.GENERIC.LAST_TICK_AUDIO);
	Animated.sequence([
		Animated.timing(item, {
			toValue: 100,
			duration: 500,
			useNativeDriver: false
		  }),
		Animated.timing(item, {
			toValue: 0,
			duration: 500,
			useNativeDriver: false
		}),
    ]).start();
}

/**
* Circle big and small animation
* @input  NA
* @return NA
*/
export const circleZoomInOut = (circleOuter, circleInner, loop = 2) => {
	let loopDuration = (loop * 1000) + 200;
	var circleimeInterval = setInterval(() => {
		Animated.parallel([
		    Animated.sequence([
				Animated.timing(circleInner, {
					toValue: RFValue(27),
					duration: 500,
					useNativeDriver: false
				  }),
				Animated.timing(circleInner, {
					toValue: RFValue(20),
					duration: 500,
					useNativeDriver: false
				}),
		    ]),
		    Animated.sequence([
				Animated.timing(circleOuter, {
					toValue: RFValue(33),
					duration: 500,
					useNativeDriver: false
				  }),
				Animated.timing(circleOuter, {
					toValue: RFValue(40),
					duration: 500,
					useNativeDriver: false
				}),
		    ])
		]).start();
	}, 1000);
	// TIMEOUT FOR THE QUESTION AFTER TOTAL TIME OUT
	setTimeout(() => {
		// CLEAR THE INTERVAL TIME IN FINAL TIME OUT
		clearInterval(circleimeInterval);
	}, loopDuration) ;
}