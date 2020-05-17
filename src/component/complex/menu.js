/**
*
* menu.js
* Bottom menu
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';

export const Menu = ( props ) => {
  const {
    activeMenu = 'HOME'
  } = props;

  /**
  * Navigate between screen
  *
  * @input  Object - Single chapter details object
  * @return NA
  */
  const _navigate = (path) => {
    // NAVIGATING TO LESSON SCREEN WITH SINGAPORE CHAPTER OBJECT
    props.navigation.navigate(path);
  }

	// RENDER HTML
	return (
		<View style={styles.menuContainer}>
  			<View style={styles.menus}>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Home')}>
            <Icon name="home" color={activeMenu === 'HOME' ? Colors.green : Colors.grayDark} size={27} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Chapter')}>
            <Icon name="book" color={activeMenu === 'CHAPTER' ? Colors.green : Colors.grayDark} size={27} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('QuizNavigation')}>
            <Icon name="light-bulb" color={activeMenu === 'QUIZ' ? Colors.green : Colors.grayDark} size={27} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Steps')}>
            <Icon name="broadcast" color={activeMenu === 'STEPS' ? Colors.green : Colors.grayDark} size={27} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Badge')}>
            <Icon name="gift" color={activeMenu === 'BADGE' ? Colors.green : Colors.grayDark} size={27} type='octicon'/>
          </TouchableOpacity>
        </View>
  	</View>
  );
} 
