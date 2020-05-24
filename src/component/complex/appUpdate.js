/**
*
* appUpdate.js
* Check wheather update needed or not
* @author - Faizal
* @date   - 22 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StatusBar, AppState} from 'react-native';
import { checkVersion } from 'react-native-check-version'

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Constant from '../../shared/constant';
import * as Storage from '../../shared/storage';
import * as Utils from '../../shared/utils';

export const AppUpdate = (props) => {
	
  	// DECLARE STATE VARIABLE
  	const [appState, setAppState] = useState(AppState.currentState);


	/*useEffect(() => {
	    AppState.addEventListener("change", _handleAppStateChange);
	    return () => {
	      AppState.removeEventListener("change", _handleAppStateChange);
	    };
	}, []);*

	/*
	* appState.match(/inactive|background/) && nextAppState === "active"
	*/
	/*const _handleAppStateChange = nextAppState => {
		if (nextAppState === "active") {
		  	console.log("App has became active");
		}
		// CHECKING FOR FORCE UPDATE
		checkVersion().then(version => {
        	console.log('Got version info:', version);
        	if (version.needsUpdate) {
            	console.log('App has a ' + (version.updateType == 'major' ? 'big' : 'small') + ' update pending')
        	}
    	})
	    .catch(e => {
	        console.log('Failed getting version info:', e)
	    })
		console.log('Currenct App status - ' + nextAppState);
		
		setAppState(nextAppState);
	};*/

	// RENDER HTML
	return (
		<></>
  	);
} 
