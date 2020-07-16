/**
*
* header.js
* Header of the Application
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, ImageBackground, View, Platform, Share } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL COMPONENT FILES
import { FeedbackModel } from '../../component/model/feedbackModel';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Utils from '../../shared/utils';

export const MHeader = (props) => {
  	const [showFeedbackModel, setShowFeedbackModel] = useState(false);

  	// SHARE FEATURE
	const onShare = () => {
		Share.share({
			message: Platform.OS === 'ios' ? 'Welcome to Alif Laam Meem App. Learn arabic by audio, increase your Islamic knowledge, take quiz and play Islamic games with your family and friends.' : 'Welcome to Alif Laam Meem App. Learn arabic by audio, increase your Islamic knowledge, take quiz and play Islamic games with your family and friends. Download our App at https://play.google.com/store/apps/details?id=com.aliflaammeem',
			url: 'https://apps.apple.com/sg/app/alif-laam-meem/id1511715564',
			title: 'Welcome to Alif Laam Meem App. Learn arabic by audio, increase your Islamic knowledge, take quiz and play Islamic games with your family and friends.'
		});
	}

  	// RENDER HTML
	return (
		<>
			<View style={[styles.rowDirection, {paddingLeft: 5, backgroundColor: Colors.primary, zIndex:66666, height: RFValue(55), backgroundColor: Colors.primary}, props.title ? '' : styles.displayN, props.headerContainerStyle]}>
				<View style={[styles.flex1, styles.centerView, styles.alignS, {paddingLeft: RFValue(10)}]} onTouchStart={() => onShare()} underlayColor="transparent">
					<Icon name="share" color={Colors.white} size={Utils.isAndroid() ? RFValue(24) : RFValue(24)} underlayColor="transparent" iconStyle={[props.showShareIcon || (!props.hideShareIconIOS && Platform.OS === 'ios') ? '' : styles.displayN]}/>
				</View>
				<View style={[styles.flex7, styles.headerInnerContainer, styles.centerView]}>
					<Text style={[styles.headerTitle, {textAlign: 'center'}]}>{props.title}</Text>
					<Text style={[styles.headerSubTitle, props.subtitle ? '' : styles.displayN]}>{props.subtitle}</Text>
				</View>
				<View style={[styles.flex1, styles.centerView, styles.alignE, props.showFeedbackIcon || Platform.OS === 'ios' ? '' : styles.displayN, {paddingRight: RFValue(10)}]} onTouchStart={() => setShowFeedbackModel(true)} underlayColor="transparent">
					<Icon name="question" color={Colors.white} size={Utils.isAndroid() ? RFValue(24) : RFValue(24)} type='octicon' underlayColor="transparent"/>
				</View>
	      	</View>
	      	<FeedbackModel show={showFeedbackModel} handleClose={() => setShowFeedbackModel(false)}/>
      	</>
  	);
}

