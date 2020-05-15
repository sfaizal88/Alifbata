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
  			<View style={{...styles.menus }}>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Home')}>
            <Icon name="home" color={activeMenu === 'HOME' ? Colors.primary : Colors.grayDark} size={30} type='font-awesome'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Chapter')}>
            <Icon name="book" color={activeMenu === 'CHAPTER' ? Colors.primary : Colors.grayDark} size={30} type='font-awesome'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Quiz')}>
            <Icon name="question" color={activeMenu === 'QUIZ' ? Colors.primary : Colors.grayDark} size={30} type='font-awesome'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Badge')}>
            <Icon name="redeem" color={activeMenu === 'BADGE' ? Colors.primary : Colors.grayDark} size={30}/>
          </TouchableOpacity>
        </View>
  	</View>
  );
} 
