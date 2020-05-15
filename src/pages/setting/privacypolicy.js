/**
*
* privacyPolicy.js
* Privacy Policy
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState, useContext} from 'react';
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

export const PrivacyPolicyScreen = ({ navigation }) => {

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

	                <Text style={styles.contentBodyText}>{'\t'}Your privacy is important to us. It is "Alif Ba Ta"'s policy to respect your privacy regarding any information we may collect from you across our website, http://alifbata.iwaymen.com, and other sites we own and operate.</Text>

					<Text style={styles.contentBodyText}>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</Text>

					<Text style={styles.contentBodyText}>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</Text>

					<Text style={styles.contentBodyText}>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</Text>

					<Text style={styles.contentBodyText}>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</Text>

					<Text style={styles.contentBodyText}>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</Text>

					<Text style={styles.contentBodyText}>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</Text>

					<Text style={styles.contentBodyText}>This policy is effective as of 25 April 2020.</Text>
	
	            </View>
	        </ScrollView>
  		</SafeAreaView>
  	</>
  );
} 