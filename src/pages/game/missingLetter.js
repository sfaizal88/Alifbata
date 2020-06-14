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
import {StyleSheet, Text, View , StatusBar, TouchableOpacity, Animated, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import { HeaderBackButton } from '@react-navigation/stack';
import { DraxProvider, DraxView } from 'react-native-drax';
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
import HelpIcon from '../../../assets/img/help.png';

export const MissingLetterScreen = ({ navigation, route }) => {

	// TIME DECLARE 
	var gameCDInterval;// WHEN THE GAME STARTS 0 TO 60/90 SECOND FOR VERY ONE SECOND TO CHANGE THE TIMER
	var gameCDIntervalLast10Second; // TRIGGER ON LAST 10 SECOND EVERY ONE SECOND WITH SOUND
	var gameCDTimer; // TRIGGER WHEN THE OVER ALL TIME ENDS
	var gameCDTimerLast10Second; // TRIGGER WHEN OVER ALL TIME - 10 SECOND TO NOTIFIC USER THAT U HAVE 10 SEC
	var readyCDInterval; // READY 3 2 1 TRIGGER ON EVERY ONE SECOND
	var readyCDAliveTimer; // TRIGGER TIME TO DESTORY THE READTY INTERVAL AND CALL MAIN TIMER
	var gameOverTimer; // TRIGGER NAVIAGET AFTER SHOWING GAME OVER

	// LOCAL VARIABLE DECLARE
	var getReady = ['1', '2', '3', 'READY'];
	var getReadyTime = Constant.GENERIC.HEADSUP_READY_TIMER;
	const [jumbleWordFlag, setJumbleWordFlag] = useState([]);

    // DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [startTimer, setStartTimer]           = useState(getReady[Constant.GENERIC.HEADSUP_READY_TIMER]);
	const [bgGame, setBgGame]                   = useState(Colors.robinEggBlue);
	const [timer, setTimer]                     = useState(Constant.GENERIC.MLETTER_GAME_TIMER);
	const [showSmash, setShowSmash]             = useState({enable: false, type: 'WRONG'});
	const [mLetter, setMLetter]                 = useState({answer: '', jumbleWord: [], choseLetters: [], help: {}});
	const [showHelp, setShowHelp]               = useState(true);
	const answerList                            = useRef([]);

	// GENERATE WORDS
	const listOfWords = useRef(route.params.gameData.data);
	var allAlphabet   = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
	// ANIMATION
	const readyNoOpacity = useRef(new Animated.Value(0)).current;
	const circleOutter = useRef(new Animated.Value(RFValue(40))).current;
	const circleInner = useRef(new Animated.Value(RFValue(20))).current;
	

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
	* FETCH LATEST TEN UNIQUE WORDS
	* @input  NA
	* @return NA
	*/
	const _getUniqueList = () => {
		// GET ALL COMPLETED LESSON WITH CHAPTERS
		Storage._retrieveData(Constant.STORAGE.MLETTER_UNI_LIST).then(usedList => {
	        // CHECK THE VALUES
	        usedList = Utils.isNotEmpty(usedList) ? JSON.parse(usedList) : [];
	        // FILTER USED DATAS
	        listOfWords.current = listOfWords.current.filter(obj => {
	        	return usedList.indexOf(obj.key) === -1;
	        });
	        // GENERATE WORD
	        _generateWords();
		});
	}

	/**
	* GENERATE
	* @input  Array - Array of oBJECT
	* @return Array
	*/
	const _generateWords = () => {
		// SHOW HELP FEATURE
		setShowHelp(true);
		// ANIMATE THE CLUE DESIGN
		Animate.circleZoomInOut(circleOutter, circleInner, 7);
		// RESET ALL JUMBLE FLAG
		setJumbleWordFlag([]);
		// GENERATE RANDOM NUMBER FROM THE PREDEFINED LIST OF DATA
		let randomIndex  = Math.floor((Math.random() * (listOfWords.current.length -1)));
		// SAVE THE ORIGINAL WORD, USED TO SHOW AS FILL UP.
		let jumbleWord   = listOfWords.current[randomIndex].word;
		// USED TO CHECK WHETHER DUPLICATE LETTER NOT REMOVED AND NO USE IN CODE
		let unwantedWord = listOfWords.current[randomIndex].word;
		// FIND HOW MANY LETTER HAVE TO BE REMOVE
		let totalMissingLetter = Math.round((listOfWords.current[randomIndex].word.length/100)*Constant.GENERIC.MLETTER_GAME_MISSING_LETTER_PERT);
		// DECLARE EMPTY OPTION LIST
		let choseLetters = [];
		// LOOP THE TOTAL NO. OF MISSING LETTER
		for (let i=0; i< totalMissingLetter; i++) {
			// PICK RANDOM LETTER FROM THE ANSWER
			let index = Math.floor((Math.random() * (unwantedWord.length -1)));
			// PUSH THE LETTER INTO OPTION LIST
			choseLetters.push(unwantedWord[index]);
			// CONVERT PISKED LETTER TO 0 FOR FILL UP
			jumbleWord = jumbleWord.replace(unwantedWord[index], '0');
			// REMOVE FROM UNWANTED TO AVOID DUPLICATE
			unwantedWord = unwantedWord.replace(unwantedWord[index], '');
		}

		// TOTAL 12 OPTION WILL BE SHOWN
		for (let i=0; i< (Constant.GENERIC.TOTAL_MLETTER_OPTION - totalMissingLetter); i++) {
			// PICK RANDOPM INDEX
			let index = Math.floor((Math.random() * (allAlphabet.length -1)));
			// PUSH THE RANDOM LETTER
			choseLetters.push(allAlphabet[index]);
		}
		// USING THE INDEX PICK THE WORD FROM THE PREDEFINED LIST OF WORDS
		setMLetter({...mLetter, answer: listOfWords.current[randomIndex].word, jumbleWord: jumbleWord.split(''), choseLetters, help: listOfWords.current[randomIndex]});
		// REMOVE USED OBJECT FROM LIST
		listOfWords.current.splice(randomIndex, 1);
	}

	/**
	* PASS / CHECK THE WORD AND CHECK NEXT ONE
	*/
	const _passWords = (isPass = true) => {
		let systemAnswer = mLetter.answer;
		let systemKey    = mLetter.key;
		if (!isPass) {
			let userAnswer = mLetter.jumbleWord.join("");
			if (mLetter.answer === userAnswer) {
				// GENERATE ANSWER LIST
				let answers = [...answerList.current, {word: userAnswer, type: Constant.GENERIC.CORRECT_ANSWER, key: systemKey}];
				// SHOW SMASH SCREEN
		  		setShowSmash({...showSmash, enable: true, type: 'CORRECT'});
		  		// UPDATE THE ANSWER LIST
				answerList.current = answers;
		  		// REGENRATING THE WORD AGAIN
				//setTimeout(() => {
					_generateWords();
				//}, 1000);
			} else {
				// SHOW SMASH SCREEN
		  		setShowSmash({...showSmash, enable: true, type: 'WRONG'});
			}
		} else {
			// FIND MISSING INDEX
			let filledIndex = []
			mLetter.jumbleWord.forEach((item, index) => {
				if (item == 0) {
					filledIndex.push(index);
				}
			});
			setJumbleWordFlag(filledIndex);
			// SHOWING THE ANSWER
			mLetter.jumbleWord = mLetter.answer.split('');
			// GENERATE ANSWER LIST
			let answers = [...answerList.current, {word: systemAnswer, type: Constant.GENERIC.PASS_QUESTION, key: systemKey}];
			// SHOW SMASH SCREEN
	  		setShowSmash({...showSmash, enable: true, type: 'PASS'});
			// UPDATE THE ANSWER LIST
			answerList.current = answers;
			// REGENRATING THE WORD AGAIN
			setTimeout(() => {
				// REGENRATING THE WORD AGAIN
				_generateWords();
			}, 1300);
			
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
			_getUniqueList();
    		// CHANGE BACKGROUND COLOR
    		setBgGame(Colors.help);
			// GENERATE TIMER
			_generateGameTimer();
    	}, 4000) ;
	}

	/**
	* SET TIMER
	* @input  Array - Array of oBJECT
	* @return Array
	*/
	const _generateGameTimer = () => {
		// DECALRE TIME DURATION
		let timeout      = Constant.GENERIC.MLETTER_GAME_TIMER * 1000;
		let finalTimeout = Constant.GENERIC.MLETTER_GAME_FINAL_TIMER * 1000;

		// CLEAR READY COUNT DOWN TIMER
		clearTimeout(readyCDAliveTimer);

		gameCDInterval = setInterval(
    		() => setTimer((prevState)=> (prevState - 1)),
    	1000);
    	// TIMEOUT FOR THE QUESTION AFTER TOTAL TIME OUT
    	gameCDTimer = setTimeout(() => {
    		// CLEAR THE INTERVAL TIME IN OVER ALL GAME TIME
    		clearInterval(gameCDInterval);
    		// CLEAR THE INTERVAL TIME IN OVER ALL GAME TIME
    		clearTimeout(gameCDTimerLast10Second);
    		// CLEAR THE INTERVAL TIME IN FINAL 10 SECOND TIME OUT
    		clearInterval(gameCDIntervalLast10Second);
    		// SHOW GAME OVER SMASH SCREEN
		  	setShowSmash({...showSmash, enable: true, type: 'GAMEOVER'});
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
				return item.key;
			});
			let allUsedKeys = [...list, ...usedKeys];
			// RESET THE STORAGE
			if (route.params.gameData.data.length < (allUsedKeys.length + 15)) {
				allUsedKeys = [];
			}
			Storage._storeData(Constant.STORAGE.MLETTER_UNI_LIST, JSON.stringify(allUsedKeys));
		});
		// NAVIGATING TO LESSON SCREEN WITH SINGLE CHAPTER OBJECT
		navigation.navigate('MissingLetterScore', {answerList: answerList.current})
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
		// BACK TO PREVIOUS PAGE
		navigation.goBack();
	}

	/**
    * Letter dropped into the user missing box
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _dropLetterFilledBox = (payload, index) => {
		// FILLED INDEX
		let filledIndex = [...jumbleWordFlag, index];
		mLetter.jumbleWord[index] = payload.dragLetter;
		mLetter.choseLetters[payload.dragLetterIndex] = 0;
		setJumbleWordFlag(filledIndex);
		Utils.playAudio(Constant.GENERIC.DROP_LETTER_AUDIO, 0.4);
	}

	/**
    * Letter dropped into the option box
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _dropLetterOptionBox = (payloadLetter, dragLetterIndex) => {
		Utils.playAudio(Constant.GENERIC.DROP_LETTER_AUDIO, 0.4);
		// REMOVING INDEX FROM USER INPUT FLAG BOX
		let filledIndex = [...jumbleWordFlag];
		let removeIndex = filledIndex.indexOf(dragLetterIndex);
		if (removeIndex > -1) {
		  	filledIndex.splice(removeIndex, 1);
		}
		setJumbleWordFlag(filledIndex);
		mLetter.jumbleWord[dragLetterIndex] = 0;

		let optionIndex = mLetter.choseLetters.indexOf(0);
		mLetter.choseLetters[optionIndex] = payloadLetter;
	}

	/**
    * Show help content or image
    *
    * @input  NA
    * @return NA
    */
	const _generateHelp = () => {
		Utils.playAudio(Constant.GENERIC.MENU_CLICK_AUDIO);
		setShowHelp(false);
	}
	

  // RENDER HTML
  return (
    <View style={styles.appbg}>
      	<SmashScreen show={showSmash} isShowModel={setShowSmash}/>
        <Loader show={screenIsWaiting} />
        <SafeAreaView style={[styles.safeViewContainer, {backgroundColor: bgGame}]} forceInset={{ bottom: 'never'}}>
        	<DraxProvider>
				<View style={[styles.body, styles.p0, styles.mh0, {backgroundColor: bgGame}, styles.centerView]}>
					<View style={[styles.timeoutContainer, styles.mt20, startTimer ? styles.displayOpaN : '']}>
				  		<Text style={[styles.timeoutLabel]}>{timer}</Text>
				  	</View>
				  	<Animated.Text style={[ styles.countdownTimer, startTimer ? '' : styles.displayOpaN, { fontSize: readyNoOpacity }]}>
				  	{startTimer}
				  	</Animated.Text>
				  	<View style={[styles.columnDirection, startTimer ? styles.displayOpaN : '']}>
			  			<View style={[styles.flex1, showHelp ? styles.centerViewB : styles.centerViewB, styles.pb40]}>
			  				<Text style={[showHelp ? styles.displayOpaN : '', mLetter.help.content ? '' : styles.displayOpaN, styles.helpContent]}>{mLetter.help.content}</Text>
			  				<Image style={[showHelp ? styles.displayOpaN : '', mLetter.help.img ? '' : styles.displayOpaN, styles.img150]} source={mLetter.help.img}/>
			  				<TouchableOpacity onPress={() => _generateHelp()} underlayColor="transparent" style={[showHelp ? '' : styles.displayOpaN]}>
							  	<Animated.View style={[styles.cCircleContainerOuter, styles.cCircleContainerSmallOuter, {borderColor: Colors.white, borderWidth: circleOutter}]} underlayColor="transparent">
					            	<Animated.View style={[styles.cCircleContainerAnimate, styles.cCircleContainerSmall, {borderWidth: circleInner, backgroundColor: Colors.lightWhite, borderColor: Colors.lightWhite, shadowColor: Colors.lightWhite}]}>
					            		<Image source={HelpIcon} style={{width: RFValue(80), height: RFValue(80)}}/>
					            	</Animated.View>
					            </Animated.View>
				            </TouchableOpacity>
					  	</View>
					  	<View style={[styles.flex1, styles.centerViewB, styles.pt30, {flex: 1,flexDirection: 'column',justifyContent: 'flex-end'}]}>
					  		<View style={[styles.fillUpContainer, {width: '100%', paddingTop: 10, paddingBottom: 10, backgroundColor: Colors.gold}]}>
						  		<View style={[styles.rowDirectionWrap, styles.centerView]}>
						  			{mLetter.jumbleWord.map((item, index) => {
						  				if (mLetter.jumbleWord[index] == 0) {
											return (
												<DraxView style={[styles.optionBox, mLetter.jumbleWord[index] == 0 ? styles.fillupBox : '']} key={index} 
													onReceiveDragDrop={({ dragged: { payload } }) => { _dropLetterFilledBox(payload, index); }}>
												  <Text style={styles.optionBoxLabel}>{mLetter.jumbleWord[index] == 0 ? '' : mLetter.jumbleWord[index]}</Text>
												</DraxView>
											)
										} else if (jumbleWordFlag.indexOf(index) > -1) {
											return (
												<TouchableOpacity activeOpacity={1}  style={[styles.optionBox, styles.filledBox]} key={index} onPress={() => _dropLetterOptionBox(mLetter.jumbleWord[index], index)}>
												  <Text style={[styles.optionBoxLabel, styles.filledBoxLabel]}>{mLetter.jumbleWord[index]}</Text>
												</TouchableOpacity>
											)
										} else {
											return (
												<View style={[styles.optionBox]} key={index}>
												  <Text style={[styles.optionBoxLabel]}>{mLetter.jumbleWord[index]}</Text>
												</View>
											)
										}
									})}
						  		</View>
					  		</View>
					  		<View style={[styles.optionsContainer, {width: '100%', paddingTop: 10, paddingBottom: 10, backgroundColor: Colors.white, paddingBottom: 34}]}>
						  		<View style={[styles.rowDirectionWrap, styles.centerView]}>
									{mLetter.choseLetters.map((item, index) => {
										if (mLetter.choseLetters[index] != 0) {
										return (
											<DraxView onDragStart={() => { console.log('start drag'); }} style={[styles.optionBox, styles.optionBoxBig, mLetter.choseLetters[index] == 0 ? styles.fillupBox : '']} key={'OPTION_1' + index} payload={{dragLetter: mLetter.choseLetters[index], dragLetterIndex: index}}>
											  <Text style={[styles.optionBoxLabelBig]}>{mLetter.choseLetters[index]}</Text>
											</DraxView>
										)
									} else if (mLetter.choseLetters[index] == 0) {
										return (
											<View style={[styles.optionBox, styles.optionBoxBig, styles.fillupBox]} key={'OPTION_1' + index}>
											  <Text style={[styles.optionBoxLabelBig]}></Text>
											</View>
										)
									} else {
										return (
											<View style={[styles.optionBox, styles.optionBoxBig, mLetter.choseLetters[index] == 0 ? styles.fillupBox : '']} key={'OPTION_1' + index} payload={{dragLetter: mLetter.choseLetters[index], dragLetterIndex: index}}>
											  <Text style={[styles.optionBoxLabelBig]}>{mLetter.choseLetters[index]}</Text>
											</View>
										)
									}
									})}
									<View style={[styles.rowDirection, styles.mt20, styles.w100]}>
									  <View style={[styles.flex1, styles.alignE]}>
									    <TouchableOpacity style={[styles.btn, styles.dangerBtn]} onPress={() => _passWords()}>
									      <Text style={styles.lightBtnTextLarge}>PASS</Text>
									    </TouchableOpacity>
									  </View>
									  <View style={[styles.flex1, styles.alignS]}>
									    <TouchableOpacity style={[styles.btn]}  onPress={() => _passWords(false)}>
									      <Text style={[styles.darkBtnTextLarge, styles.whiteText]}>CHECK</Text>
									    </TouchableOpacity>
									  </View>
									</View>	
								</View>
							</View>

			            </View>
				  	</View>	
				</View>
			</DraxProvider>
		</SafeAreaView>
      </View>
    );
}
/*
			
*/