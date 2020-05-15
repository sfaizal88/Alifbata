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
import {Text, StyleSheet, ImageBackground, View, Icon } from 'react-native';
import { Header } from 'react-native-elements';


// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';

export const MHeader = (props) => {
  	
  	// RENDER HTML
	return (
		<View style={{backgroundColor: Colors.white}}>
			<View style={[styles.headerContainer, props.headerContainerStyle]}>
			<View style={[styles.headerInnerContainer]}>
				<Text style={styles.headerTitle}>{props.title}</Text>
				<Text style={[styles.headerSubTitle, props.subtitle ? '' : styles.displayN]}>{props.subtitle}</Text>
			</View>
			</View>
      	</View>
  	);
}