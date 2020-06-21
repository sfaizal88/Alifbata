/**
*
* api.js
* Handle API Service
*
* @author - Faizal
* @date   - 24 April 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';

// ALL SHARED FILES
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';

/**
* Post API
*
* @input  String URL
* @input  String Body
* @return NA
*/
export const post = ({URL, body}) => {
	return new Promise((resolve, reject) => {
		// CHECK FOR INTERNET CONNECT
	    Utils.isInternetConnected().then((isConnected) => {
	    	// CHECKING WHETHER INTERNET CONNECT THERE
	    	// FETCH REQUEST
	    	if (isConnected) {
				fetch(URL, {
					method: 'POST',
			      	body: JSON.stringify({...body}),
					headers: {
				        'Cache-Control': 'no-cache'
				    }
				})
				.then((response) => response.json())
				.then((data) => {
					if (data.code === Constant.GENERIC.FAILED) {
						// ALERT POPUP
		        		Utils.alert('Failed', Utils.messageByKey(data), ['Ok'], [() => console.log('Cancel Pressed')], ['cancel']);
						reject(Utils.messageByKey(data));
					} else if (data.code === Constant.GENERIC.SESSION_EXPIRED) {
						// ALERT POPUP
		        		Utils.alert('Failed', Utils.messageByKey(data), ['Ok'], [() => console.log('Cancel Pressed')], ['cancel']);
						reject(Utils.messageByKey(data));
					} else {
						resolve(data);
					}
				}).catch((error) => {
					console.log(error);
					reject(error);
				});
			} else {
				Utils.alert('Failed', 'No Internet connection. Please make sure that Wi-Fi or mobile data is turned on, then try again.', ['Ok'], [() => reject('No Internet Connection.')], ['cancel']);
			}
		});
	});	
};