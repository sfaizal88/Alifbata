/**
*
* more.js
* More menus
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useContext} from 'react';
import { Button, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Alert, Icon } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// ALL PAGE FILES
import { MHeader  } from './layout/header';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import { Setting } from '../shared/setting';
import * as Data from '../shared/data';
import * as Utils from '../shared/utils';
import * as Constant from '../shared/constant';
import * as Storage from '../shared/storage';

export const MoreScreen = ({ navigation }) => {

  	// DECLARE STATE VARIABLE
  	const [screenIsWaiting, setScreenIsWaiting] = useState(true);

  	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// HIDE WAITING SCREEN
		setScreenIsWaiting(false)
	}, []);

	// RENDER HTML
	return (
    <>
      	<Loader show={screenIsWaiting} />
    	<SafeAreaView style={{...styles.safeViewContainer}} forceInset={Data.SafeAreaViewSetting}>
	        <MHeader title="Setting" icon="gear"/>
	        <ScrollView style={[styles.body, styles.p0, styles.pt5]}>
		    	<TouchableOpacity style={styles.listType2Container} onPress={() => navigation.navigate('TermsnCondition')}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'flag'} color={Colors.secondary} size={Setting.moreIconSize}type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Terms of Service</Text>
						<Text style={styles.listType2Descr}>Check the latest Terms of Service.</Text>
		    		</View>
			        <View style={styles.listType2RightIcon}>
			          <Icon name="angle-right" color={Colors.grayLight} size={25}type="font-awesome"/>
			        </View>
		    	</TouchableOpacity>
		    	<TouchableOpacity style={styles.listType2Container} onPress={() => navigation.navigate('PrivacyPolicy')}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'file'} color={Colors.secondary} size={Setting.moreIconSize}type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Privacy Policy</Text>
						<Text style={styles.listType2Descr}>Check the latest Privacy Policy.</Text>
		    		</View>
			        <View style={styles.listType2RightIcon}>
			          <Icon name="angle-right" color={Colors.grayLight} size={25}type="font-awesome"/>
			        </View>
		    	</TouchableOpacity>
		    	<TouchableOpacity style={styles.listType2Container} onPress={() => navigation.navigate('Support')}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'question'} color={Colors.secondary} size={Setting.moreIconSize}type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Get Help</Text>
						<Text style={styles.listType2Descr}>Provide your feedback.</Text>
		    		</View>
			        <View style={styles.listType2RightIcon}>
			          <Icon name="angle-right" color={Colors.grayLight} size={25}type="font-awesome"/>
			        </View>
		    	</TouchableOpacity>
		    	<TouchableOpacity style={styles.listType2Container}>
		    		<View style={styles.listType2LeftIcon}>
		    			<Icon name={'barcode'} color={Colors.secondary} size={Setting.moreIconSize}type="font-awesome"/>
		    		</View>
		    		<View style={styles.listType2Content}>
						<Text style={styles.listType2Title}>Version 2.0 (202004)</Text>
						<Text style={styles.listType2Descr}>Latest version released on April, 2020.</Text>
		    		</View>
		    	</TouchableOpacity>
		    </ScrollView>
  		</SafeAreaView>
  	</>
  );
} 