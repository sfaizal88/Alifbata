/**
*
* runner.js
* Game details.
*
* @author - Faizal
* @date   - 26 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useRef } from 'react';
import {StyleSheet, Text, View , StatusBar, TouchableOpacity, Animated, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import { HeaderBackButton } from '@react-navigation/stack';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';
import { SmashScreen  } from '../../component/complex/smashScreen';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Setting  } from '../../shared/setting';
import { Colors } from '../../shared/colors';
import * as Constant from '../../shared/constant';
import * as Utils from '../../shared/utils';
import * as Animate from '../../shared/animate';
import * as Storage from '../../shared/storage';

// ALL ICON
import MosqueIcon from '../../../assets/img/mosque.png';
import CrossIcon from '../../../assets/img/cross.png';
import RunnerIcon from '../../../assets/img/runner.png';

export const RunnerGameScreen = ({ navigation, route }) => {

	// TIME DECLARE 
	var readyCDInterval; // READY 3 2 1 TRIGGER ON EVERY ONE SECOND
	var readyCDAliveTimer; // TRIGGER TIME TO DESTORY THE READTY INTERVAL AND CALL MAIN TIMER

	// LOCAL VARIABLE DECLARE
	var getReady = ['1', '2', '3', 'READY'];
	var getReadyTime = Constant.GENERIC.HEADSUP_READY_TIMER;

    // DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [startTimer, setStartTimer]           = useState(getReady[Constant.GENERIC.HEADSUP_READY_TIMER]);
	const [bgGame, setBgGame]                   = useState(Colors.robinEggBlue);
	const [showSmash, setShowSmash]             = useState({enable: false, type: 'WRONG'});
	const [player1, setPlayer1]                 = useState('0%');
	const [player2, setPlayer2]                 = useState('0%');
	const [player1Result, setPlayer1Result]     = useState(false);
	const [player2Result, setPlayer2Result]     = useState(false);

	// ANIMATION
	const readyNoOpacity = useRef(new Animated.Value(0)).current;
	

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			navigation.setOptions({
		      headerLeft: (navigation) => (<HeaderBackButton tintColor={Colors.white} label={' '} onPress={clearAllTimer}/>)
		    });
			// UPDATE STATUS COLOR
			StatusBar.setBarStyle('light-content');
			// TRIGGER TIMER
			_setUpGetReadyTime();
			// HIDE LOADER 
			setScreenIsWaiting(false);
		});
		// HIDE LOADER 
		setScreenIsWaiting(false);
	}, []);

	/**
	* RESET PLAYER
	* @input  NA
	* @return NA
	*/
	const _resetGame = () => {
		setPlayer1('0%');
		setPlayer2('0%');
		setPlayer1Result(false);
		setPlayer2Result(false);
	}


	/**
    * Walk Player 1
    *
    * @input  NA
    * @return NA
    */
	const _walkPlayer1 = () => {
		let bottomValue = player1.replace("%", "");
		bottomValue =  (parseInt(bottomValue) + 1) + '%';
		if (parseInt(bottomValue.replace("%", "")) < 81 && !player1Result && !player2Result) {
			setPlayer1(bottomValue);
		} else if (!player1Result && !player2Result) {
          	Utils.playAudio(Constant.GENERIC.COMPLETE_AUDIO);
			setPlayer1Result(true);
			Utils.alert('Player red Won', 'Wow. Player red reach the Mosque first.', ['Play again', 'Exit'], 
        	[() => _resetGame(), () => _navigate(), ], ['', '']);
		}
	}

	/**
    * Walk Player 2
    *
    * @input  NA
    * @return NA
    */
	const _walkPlayer2 = () => {
		let bottomValue = player2.replace("%", "");
		bottomValue =  (parseInt(bottomValue) + 1) + '%';
		if (parseInt(bottomValue.replace("%", "")) < 81 && !player2Result && !player1Result) {
			setPlayer2(bottomValue);
		} else if (!player2Result && !player1Result) {
          	Utils.playAudio(Constant.GENERIC.COMPLETE_AUDIO);
			setPlayer2Result(true);
			Utils.alert('Player blue Won', 'Wow. Player blue reach the Mosque first.', ['Play again', 'Exit'], 
        	[() => _resetGame(), () => _navigate(), ], ['', '']);
		}
	}

  	/**
	* GENERATE
	* @input  Array - Array of oBJECT
	* @return Array
	*/
	const _setUpGetReadyTime = () => {
		Animate.fadeInOutCountDown(readyNoOpacity);
		// THIS LOCKS THE VIEW TO LANDSCAPE MODE
		readyCDInterval = setInterval(() => { 
			// UPDATE THE STATE
			getReadyTime = getReadyTime - 1;
			// NEXT WORD
			let timerWord = getReady[getReadyTime];
			setStartTimer(timerWord);
			if (timerWord) {
				Animate.fadeInOutCountDown(readyNoOpacity);
			}
		}, 1000);
    	readyCDAliveTimer = setTimeout(() => {
    		// CLEAR TIMER
    		setStartTimer('');
    		// DESTORY THE TIMER
    		clearInterval(readyCDInterval);
		    // GENERATE UNIQUE LIST OF WORDS
			_resetGame();
    		// CHANGE BACKGROUND COLOR
    		setBgGame('#d3d3d3');
    	}, 4000) ;
	}


	/**
    * Navigate between screen
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _navigate = () => {
		// NAVIGATING TO LESSON SCREEN WITH SINGLE CHAPTER OBJECT
		navigation.navigate('GameList')
	}

	const clearAllTimer = () => {
		// CLEAR READY COUNT DOWN INTERVAL
		clearInterval(readyCDInterval);
		// CLEAR READY COUNT DOWN TIMER
		clearTimeout(readyCDAliveTimer);
		// BACK TO PREVIOUS PAGE
		navigation.goBack();
	}
	

  // RENDER HTML
  return (
    <View style={styles.appbg}>
      	<SmashScreen show={showSmash} isShowModel={setShowSmash}/>
        <Loader show={screenIsWaiting} />
        <SafeAreaView style={[styles.safeViewContainer, {backgroundColor: bgGame}]} forceInset={{ bottom: 'never', top: 'never'}}>
			<View style={[styles.body, styles.p0, styles.mh0, {backgroundColor: bgGame}, styles.centerView, Utils.isAndroid ? styles.noBRBottom : '']}>
			  	<Animated.Text style={[ styles.countdownTimer, startTimer ? '' : styles.displayN, { fontSize: readyNoOpacity }]}>
			  		{startTimer}
			  	</Animated.Text>
			  	<View style={[styles.row, startTimer ? styles.displayN : '', {overflow: 'hidden'}]}>
				  	<View style={[styles.grassField, {backgroundColor: '#b32817'}]}>
				  		<View activeOpacity={1}  style={[styles.player1Control]} underlayColor="transparent" onTouchStart={() => _walkPlayer1()}>
				  			<Image source={RunnerIcon} style={styles.runnerIcon} resizeMode={'contain'}/>
				  		</View>
				  	</View>
				  	<View style={[styles.roadleft]}>
				  		<View style={[styles.player1, {bottom: player1}]}></View>
				  		<Image source={CrossIcon} style={[styles.winnerFlag]} resizeMode={'contain'}/>
				  	</View>
				  	<View style={[styles.roadRight]}>
				  		<View style={[styles.player2, {bottom: player2}]}></View>
				  		<Image source={CrossIcon} style={[styles.winnerFlag]} resizeMode={'contain'}/>
				  		<Image source={MosqueIcon} style={[styles.mosqueFlag]} resizeMode={'contain'}/>
				  	</View>
				  	<View style={[styles.grassField, {backgroundColor: '#1571af'}]}>
				  		<View activeOpacity={1}  style={[styles.player2Control]} underlayColor="transparent" onTouchStart={() => _walkPlayer2()}>
				  			<Image source={RunnerIcon} style={[styles.runnerIcon]} resizeMode={'contain'}/>
				  		</View>
				  	</View>
			  	</View>	
			</View>
		</SafeAreaView>
      </View>
    );
}
/*
			
*/