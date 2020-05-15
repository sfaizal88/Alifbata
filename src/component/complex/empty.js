/**
*
* empty.js
* Show screen when no result or empty result
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React from 'react';
import {Text, View} from 'react-native';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';

export const Empty = (props) => {
	// RENDER HTML
	return (
		<>
			<View style={styles.emptyContainer}>
    			<Icon name={props.icon} style={styles.emptyIcon} size={50} type="font-awesome"/>
    			<Text style={styles.emptyTitle}>{props.title}</Text>
    			<Text style={styles.emptyDescr}>{props.subtitle}</Text>
    		</View>
      	</>
  	);
} 
