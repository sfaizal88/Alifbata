/**
*
* termsncondition.js
* Terms and Condition Screen
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

// ALL PAGE FILES
import { MHeader  } from '../layout/header';

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as DFormat from '../../shared/dformat';
import * as Data from '../../shared/data';

export const SupportScreen = ({ navigation }) => {

	// DECLARE STATE VARIABLE
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);

  	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		setScreenIsWaiting(false)
	}, []);

	return (
    <>
      	<Loader show={screenIsWaiting} />
    	<SafeAreaView style={styles.safeViewContainer}>
	        <ScrollView style={[styles.body, styles.p0]}>
	        	<View style={[styles.contentBody, styles.mt0]}>
	                <Text style={styles.contentBodyText}>{'\t'}Alif Ba ta is a basic arabic learning app. For further support or more infomation, feel free to contact us at help.alifbata@gmail.com.</Text>
	            </View>
	        </ScrollView>
  		</SafeAreaView>
  	</>
  );
} 