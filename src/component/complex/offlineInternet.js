/**
*
* offlineInternet.js
* Show Offline Internet connection
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useEffect, useState, useContext} from 'react';
import {Text, View, StatusBar, AppState} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

// ALL CONTEXT FILES
import AppContext from '../../context/appContext';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Constant from '../../shared/constant';
import * as Storage from '../../shared/storage';
import * as Utils from '../../shared/utils';
import * as DFormat from '../../shared/dformat';

export const OfflineInternet = (props) => {
	
  	// DECLARE STATE VARIABLE
  	const [isConnected, setIsConnected] = useState(true);
  	const [appState, setAppState]       = useState(AppState.currentState);

	// DECLARE CONTEXT
	const appContextPayLoad = useContext(AppContext);

	// INTERNET CONNECTION ONLINE / OFFLINE
	useEffect(() => {
		subscribeNetworkConnection();
	});

	useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
	}, []);

	const _handleAppStateChange = nextAppState => {
		if (appState.match(/inactive|background/) && nextAppState === "active") {
		  	console.log("App has come to the foreground!");
		}
		console.log('App status - ' + nextAppState);
		// WHEN THE APP IS CLOSED AND OPENED
		if (Constant.GENERIC.APP_CLOSED === nextAppState) {
			// CLEAR MOBILE STORAGE
	    	Storage._clearAllStorage();
	    	// CLEAR APP CONTEXT
			appContextPayLoad.updateAppContext({...appContextPayLoad, ...DFormat.profileObject});
		}
		setAppState(nextAppState);
	};
	
	/**
	* Network connection check
	*
	* @input  NA
	* @return NA
	*/
	const subscribeNetworkConnection = () => {
		// CHECK NETWORK CONNECTION ONCE
		NetInfo.fetch().then(state => {
			// UPDATING THE NETWORK STATUS
			setIsConnected(state.isConnected);
		});	
		// CHECK NETWORK CONNECTION USING LISTENER 
		NetInfo.addEventListener(state => {
			// UPDATING THE NETWORK STATUS
			setIsConnected(state.isConnected);
		});
	}

	// RENDER HTML
	return (
		<>
		<StatusBar barStyle={'light-content'}/>
		<View style={[styles.offlineBox, isConnected ? styles.displayN : '']}>
        	<Text style={styles.offlineBoxText}>No Internet Connection</Text>
      	</View>
      	</>
  	);
} 
