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
import {Text, StyleSheet, ImageBackground, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL COMPONENT FILES
import { FeedbackModel } from '../../component/model/feedbackModel';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';

export const MHeader = (props) => {
  	const [showFeedbackModel, setShowFeedbackModel] = useState(false);
  	// RENDER HTML
	return (
		<>
			<View style={[styles.rowDirection, {backgroundColor: Colors.primary, zIndex:66666, height: RFValue(55), backgroundColor: Colors.primary}, props.title ? '' : styles.displayN, props.headerContainerStyle]}>
				<View style={[styles.flex1]}></View>
				<View style={[styles.flex7, styles.headerInnerContainer, styles.centerView]}>
					<Text style={styles.headerTitle}>{props.title}</Text>
					<Text style={[styles.headerSubTitle, props.subtitle ? '' : styles.displayN]}>{props.subtitle}</Text>
				</View>
				<View style={[styles.flex1, styles.centerView]} onTouchStart={() => setShowFeedbackModel(true)} underlayColor="transparent">
					<Icon name="question" color={Colors.white} size={RFValue(35)} type='octicon' underlayColor="transparent"/>
				</View>
	      	</View>
	      	<FeedbackModel show={showFeedbackModel} handleClose={() => setShowFeedbackModel(false)}/>
      	</>
  	);
}