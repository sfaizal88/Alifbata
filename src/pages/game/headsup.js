/**
*
* game.js
* Game details.
*
* @author - Faizal
* @date   - 26 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useRef } from 'react';
import {StyleSheet, Text, View , SafeAreaView, StatusBar, Animated } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { HeaderBackButton } from '@react-navigation/stack';
import { accelerometer, setUpdateIntervalForType, SensorTypes, gyroscope } from "react-native-sensors";

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

export const HeadsupGameScreen = ({ navigation, route }) => {

	// TIME DECLARE 
	var gameCDInterval;// WHEN THE GAME STARTS 0 TO 60/90 SECOND FOR VERY ONE SECOND TO CHANGE THE TIMER
	var gameCDIntervalLast10Second; // TRIGGER ON LAST 10 SECOND EVERY ONE SECOND WITH SOUND
	var gameCDTimer; // TRIGGER WHEN THE OVER ALL TIME ENDS
	var gameCDTimerLast10Second; // TRIGGER WHEN OVER ALL TIME - 10 SECOND TO NOTIFIC USER THAT U HAVE 10 SEC
	var readyCDInterval; // READY 3 2 1 TRIGGER ON EVERY ONE SECOND
	var readyCDAliveTimer; // TRIGGER TIME TO DESTORY THE READTY INTERVAL AND CALL MAIN TIMER
	var gameOverTimer; // TRIGGER NAVIAGET AFTER SHOWING GAME OVER
	// LOCAL VARIABLE DECLARE
	var _subscription;
	var getReady = ['1', '2', '3', 'GET READY'];
	var getReadyTime = Constant.GENERIC.HEADSUP_READY_TIMER;
	var showForeHeadMsg = false;
	var generatedWord = '';

    // DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [isHoldProperly, setIsHoldProperly]   = useState(true);
	const [word, setWord]                       = useState('');
	const [startTimer, setStartTimer]           = useState(getReady[Constant.GENERIC.HEADSUP_READY_TIMER]);
	const [bgGame, setBgGame]                   = useState(Colors.robinEggBlue);
	const [timer, setTimer]                     = useState(Constant.GENERIC.HEADSUP_GAME_TIMER);
	const [showSmash, setShowSmash]             = useState({enable: false, type: 'HEADSUP_PASS', timerOff: false});

	// ANIMATION
	const readyNoOpacity   = useRef(new Animated.Value(0)).current;
	const listOfWords      = useRef(route.params.gameData.data);
	const answerList       = useRef([]);
	let mobilePosition     = '';// PASS, CORRECT, NORMAL, FOREHEAD

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
	* GENERATE
	* @input  Array - Array of oBJECT
	* @return Array
	*/
	const _setUpGetReadyTime = () => {
		// CHANGE ORIENTATION
		Utils.setOrientation('LANDSCAPE');
		setTimeout(() => {
			// TRIGGER FIRST ANIMATE
			Animate.fadeInOutCountDown(readyNoOpacity);
		}, 0);
		// THIS LOCKS THE VIEW TO LANDSCAPE MODE
		readyCDInterval = setInterval(() => { 
			// UPDATE THE STATE
			getReadyTime = getReadyTime - 1;
			// COUNT DOWN TIMER
			let countDown = getReady[getReadyTime] ? getReady[getReadyTime] : 0;
			// UPDATE THE STATE
			setStartTimer(countDown);
			// CALL ANIMATE
			if (countDown) {
				Animate.fadeInOutCountDown(readyNoOpacity);
			}
		}, 1000);
    	readyCDAliveTimer = setTimeout(() => {
    		// CLEAR TIMER
    		setStartTimer('');
    		// DESTORY THE TIMER
    		clearInterval(readyCDInterval);
		    // GENERATE WORD
			_getUniqueList();
			if (Constant.GENERIC.SENSOR) {
				setUpdateIntervalForType(SensorTypes.accelerometer, 300);
				setUpdateIntervalForType(SensorTypes.gyroscope, 300);
				// SUBSCRIBE LISTERN
				_subscribe();
			}
    		// CHANGE BACKGROUND COLOR
    		setBgGame(Colors.turquoise);
			// GENERATE TIMER
			_generateGameTimer();
    	}, 4000) ;
	}

	/**
	* FETCH LATEST TEN UNIQUE WORDS
	* @input  NA
	* @return NA
	*/
	const _getUniqueList = () => {
		// GET ALL COMPLETED LESSON WITH CHAPTERS
		Storage._retrieveData(Constant.STORAGE.HEADSUP_UNI_LIST).then(usedList => {
	        // CHECK THE VALUES
	        usedList = Utils.isNotEmpty(usedList) ? JSON.parse(usedList) : [];
	        // FILTER USED DATAS
	        listOfWords.current = listOfWords.current.filter(item => {
	        	return usedList.indexOf(item) === -1;
	        });
	        // GENERATE WORD
	        _generateWords();
		});
	}

	/**
	* SET TIMER
	* @input  Array - Array of oBJECT
	* @return Array
	*/
	const _generateGameTimer = () => {
		// DECALRE TIME DURATION
		let timeout      = Constant.GENERIC.HEADSUP_GAME_TIMER * 1000;
		let finalTimeout = Constant.GENERIC.HEADSUP_GAME_FINAL_TIMER * 1000;
		// CLEAR READY COUNT DOWN TIMER
		clearTimeout(readyCDAliveTimer);

		gameCDInterval = setInterval(
    		() => setTimer((prevState)=> (prevState - 1)),
    	1000);
    	// TIMEOUT FOR THE QUESTION AFTER TOTAL TIME OUT
    	gameCDTimer = setTimeout(() => {
    		// UNSCRIBE THE SENSOR
    		_unsubscribe();
    		// CLEAR THE INTERVAL TIME IN OVER ALL GAME TIME
    		clearInterval(gameCDInterval);
    		// CLEAR THE INTERVAL TIME IN OVER ALL GAME TIME
    		clearTimeout(gameCDTimerLast10Second);
    		// CLEAR THE INTERVAL TIME IN FINAL 10 SECOND TIME OUT
    		clearInterval(gameCDIntervalLast10Second);
    		// SHOW GAME OVER SMASH SCREEN
		  	setShowSmash({...showSmash, enable: true, type: 'GAMEOVER', timerOff: false});
			// PLAY TICK SOUND
			Utils.playAudio(Constant.GENERIC.GAME_OVER_AUDIO, 0.2);
    		// NAVIGATE TO RESULT PAGE AFTER SHOWING GAME OVER SCREEN
    		gameOverTimer = setTimeout(() => {
    			// CLEAR THE INTERVAL TIME IN OVER ALL GAME TIME
    			clearTimeout(gameCDTimer);
	    		// AFTER TIMEOUT NAVIGATE TO NEXT SCREEN
	    		_navigate();
	    	}, 1000);
    	}, timeout +  1000) ;

    	// BEFORE LAST 10 SECOND
    	gameCDTimerLast10Second = setTimeout(() => {
			// FINAL 10 SECOND SOUND
			gameCDIntervalLast10Second = setInterval(() => {
				// PLAY TICK SOUND
				Utils.playAudio(Constant.GENERIC.LAST_TICK_AUDIO);
			}, 1000);
    	}, finalTimeout);
	}

  	/**
	* GENERATE
	* @input  Array - Array of oBJECT
	* @return Array
	*/
	const _generateWords = () => {
		// FIND THE WORDS
		let randomIndex = Math.floor((Math.random() * (listOfWords.current.length - 1)) + 1);
		// PICK THE WORD
		generatedWord   = listOfWords.current[randomIndex];
		// UPDATE THE STATE
		setWord(generatedWord);
		// REMOVE USED OBJECT FROM LIST
		listOfWords.current.splice(randomIndex, 1);
		
	}

	/**
	* GENERATE
	* @input  Array - Array of oBJECT
	* @return Array
	*/
	const _checkWords = (trigger) => {
		console.log('Word - ' + generatedWord);
		// CHECKING THE ANSWER
		if (trigger === Constant.GENERIC.HEADSUP_CORRECT) {
			// GENERATE ANSWER LIST
			let answers = [...answerList.current, {word: generatedWord, type: Constant.GENERIC.CORRECT_ANSWER}];
			// UPDATE THE ANSWER LIST
			answerList.current = answers;
		  	// SHOW SMASH SCREEN
		  	setShowSmash({...showSmash, enable: true, type: 'HEADSUP_CORRECT', timerOff: true});
		} else if (trigger === Constant.GENERIC.HEADSUP_PASS) {
			// GENERATE ANSWER LIST
			let answers = [...answerList.current, {word: generatedWord, type: Constant.GENERIC.PASS_QUESTION}];
			// UPDATE THE ANSWER LIST
			answerList.current = answers;
		  	// SHOW SMASH SCREEN
		  	setShowSmash({...showSmash, enable: true, type: 'HEADSUP_PASS', timerOff: true});
		}
		
	}

	
	/**
    * Navigate between screen
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _navigate = () => {
		// GET ALL USED WORDS
		Storage._retrieveData(Constant.STORAGE.MLETTER_UNI_LIST).then(list => {
			// CHECK THE VALUES
	        list = Utils.isNotEmpty(list) ? JSON.parse(list) : [];
	        // FILTER USED KEYS
			let usedKeys = answerList.current.map(item => {
				return item.word;
			});
			let allUsedKeys = [...list, ...usedKeys];
			// RESET THE STORAGE
			if (route.params.gameData.data.length < (allUsedKeys.length + 15)) {
				allUsedKeys = [];
			}
			Storage._storeData(Constant.STORAGE.MLETTER_UNI_LIST, JSON.stringify(allUsedKeys));
		});
		// NAVIGATING TO LESSON SCREEN WITH SINGLE CHAPTER OBJECT
		navigation.navigate('HeadsupScore', {answerList: answerList.current});
	}

	const _subscribe = () => {
		_subscription = accelerometer.subscribe(({ x, y, z }) => {
			let pitch = Math.atan2(-x, -z) * 180 / Math.PI;// In degrees 55 25
			let roll = Math.atan2(-y, -x) * 180 / Math.PI;// In degrees
			console.log('Pitch: ' + pitch + ', Roll: ' + roll);
			// PASS POSITION
			if (-15 > pitch  && pitch > -50 && mobilePosition !== 'PASS' && !showForeHeadMsg) {
				console.log('Pass Mode');
				mobilePosition = 'PASS';
				_checkWords(Constant.GENERIC.HEADSUP_PASS);
			} else if (-130 > pitch && pitch > -170 && mobilePosition !== 'CORRECT' && !showForeHeadMsg) {
				console.log('Correct Mode');
				mobilePosition = 'CORRECT';
				_checkWords(Constant.GENERIC.HEADSUP_CORRECT);
			} else if (-80 > pitch && pitch > -110 && mobilePosition !== 'NORMAL') {
				setShowSmash({...showSmash, enable: false});
				console.log('Normal Mode');
				mobilePosition = 'NORMAL';
				showForeHeadMsg = false;
				setIsHoldProperly(true);
				_generateWords();
			} else if (-10 < pitch) {
				setShowSmash({...showSmash, enable: false});
				mobilePosition = 'FOREHEAD';
				console.log('Place on your forehead Mode');
				showForeHeadMsg = true;
				setIsHoldProperly(false);
			}
			//console.log('Pitch - ' + pitch);
		});
	}

	const _unsubscribe = () => {
		if (Constant.GENERIC.SENSOR) {
			_subscription.unsubscribe();
		}
	}

	const clearAllTimer = () => {
		// CLEAR READY COUNT DOWN INTERVAL
		clearInterval(readyCDInterval);
		// CLEAR READY COUNT DOWN TIMER
		clearTimeout(readyCDAliveTimer);
		// CLEAR GAME MAIN COUNT DOWN INTERVAL FOR EVERY 1 SECOND
		clearInterval(gameCDInterval);
		// CLEAR MAIN GAME OVER TRIGGER TIME EVENT
		clearTimeout(gameCDTimer);
		// CLEAR THE INTERVAL TIME IN FINAL 10 SECOND TIME OUT
    	clearInterval(gameCDIntervalLast10Second);
		// CLEAR THE TIME OUT TIME IN FINAL 10 SECOND TIME OUT
    	clearTimeout(gameCDTimerLast10Second);
		// CLEAR FINAL 10 SECOND TRIGGER BEFORE  GAME OVER TRIGGER TIME EVENT
		clearTimeout(gameOverTimer);
		// UNSCRIBE THE SENSOR
		_unsubscribe();
		// BACK TO PREVIOUS PAGE
		navigation.goBack();
	}

  // RENDER HTML
  return (
    <View style={styles.appbg}>
      	<SmashScreen show={showSmash} isShowModel={setShowSmash}/>
        <Loader show={screenIsWaiting} />
        <SafeAreaView style={[styles.safeViewContainer, {backgroundColor: isHoldProperly || startTimer ? bgGame : Colors.red}]}>
			<View style={[styles.body, styles.p0, styles.mh0]}>
				<View style={[{backgroundColor: isHoldProperly || startTimer ? bgGame : Colors.red}, styles.headsupWordContainer]}>
				  	<View style={[styles.countdownTimer, styles.centerView, isHoldProperly || startTimer ? styles.displayN : '']}>
				  		<Text style={[styles.headsupWord, styles.headsupWordM]}>PLACE ON FOREHEAD</Text>
				  		<Text style={[styles.smashDesc]}>Hold device upright (vertical) to continue</Text>
				  	</View>
				  	<View style={[styles.timeoutContainer, startTimer ? styles.displayN : '']}>
				  		<Text style={[styles.timeoutLabel]}>{timer}</Text>
				  	</View>
				  	<Animated.Text style={[ styles.countdownTimer, startTimer ? '' : styles.displayN, { fontSize: readyNoOpacity }]}>
				  	{startTimer}
				  	</Animated.Text>

				  	<Text style={[styles.headsupWord, startTimer || !isHoldProperly ? styles.displayN : '']}>{word}</Text>
			    </View>
			</View>
		</SafeAreaView>
      </View>
    );
}