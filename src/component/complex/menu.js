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
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Sound from '../../shared/sound';
import * as Utils from '../../shared/utils';

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
    Utils.setOrientation('PORTRAIT');
    // PLAY THE CLICK AUDIO
    Sound.mainMenuClicked();
    // NAVIGATING TO LESSON SCREEN WITH SINGAPORE CHAPTER OBJECT
    props.navigation.navigate(path);
  }

	// RENDER HTML
	return (
		<View style={[styles.menuContainer, props.menuContainerStyle]}>
  			<View style={styles.menus}>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Home')}>
            <Icon name="home" color={activeMenu === 'HOME' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Chapter')}>
            <Icon name="book" color={activeMenu === 'CHAPTER' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('QuizNavigation')}>
            <Icon name="light-bulb" color={activeMenu === 'QUIZ' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('StepsNavigation')}>
            <Icon name="broadcast" color={activeMenu === 'STEPS' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('GameNavigation')}>
            <Icon name="games" color={activeMenu === 'GAME' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex1, styles.centerView]} onPress={() => _navigate('Badge')}>
            <Icon name="gift" color={activeMenu === 'BADGE' ? Colors.greenBlue : Colors.grayDark} size={RFValue(24)} type='octicon'/>
          </TouchableOpacity>
        </View>
  	</View>
  );
} 
