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
			<View style={[{backgroundColor: Colors.white}, props.title ? '' : styles.displayN]}>
				<View style={[styles.headerContainer, props.headerContainerStyle]}>
					<View style={[styles.headerInnerContainer]}>
						<Text style={styles.headerTitle}>{props.title}</Text>
						<Text style={[styles.headerSubTitle, props.subtitle ? '' : styles.displayN]}>{props.subtitle}</Text>
					</View>
					<Icon name="question" color={Colors.white} size={RFValue(24)} type='octicon' containerStyle={{position: 'absolute', right: RFValue(20), zIndex: 99999}} underlayColor="transparent"  onPress={() => setShowFeedbackModel(true)}/>
			
	      			
				</View>
	      	</View>
	      	<FeedbackModel show={showFeedbackModel} handleClose={() => setShowFeedbackModel(false)}/>
      	</>
  	);
}