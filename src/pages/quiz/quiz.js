/**
*
* quiz.js
* Quiz details.
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useContext} from 'react';
import { RefreshControl, StyleSheet, Text, View , FlatList, TouchableHighlight, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL PAGE FILES
import { MHeader  } from '../layout/header';

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';
import { Menu  } from '../../component/complex/menu';
import { SmashScreen  } from '../../component/complex/smashScreen';

// DATA
import * as QuizData from '../../data/quiz';

// ALL ICON
import InfoIcon from '../../../assets/img/help.png';
import MedalIcon from '../../../assets/img/medal.png';
import ExamIcon from '../../../assets/img/exam.png';
import QuizIcon from '../../../assets/img/quiz.png';
import StarIcon from '../../../assets/img/star.png';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Setting  } from '../../shared/setting';
import { Colors } from '../../shared/colors';
import * as Constant from '../../shared/constant';
import * as Utils from '../../shared/utils';
import * as Data from '../../shared/data';
import * as Storage from '../../shared/storage';
import * as Generate from '../../shared/generate';

// ALL DATA
import * as Quiz from '../../data/quiz';


export const QuizScreen = ({ navigation, route }) => {

    // DECLARE STATE VARIABLE
	const [title, setTitle]                     = useState(route.params.quizData.title);
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState([]);
	const [enablePrevBtn, setEnablePrevBtn]     = useState(false);
	const [enableNextBtn, setEnableNextBtn]     = useState(false);
	const [savedAnswered, setSavedAnswered]     = useState('');
  	const [isAnswered, setIsAnswered]           = useState(false);
  	const [correctAnswer, setCorrectAnswer]     = useState('');
  	const [enableScroll, setEnableScroll]       = useState(false);
	const [showSmash, setShowSmash]             = useState({enable: false, icon: 'remove', color: Colors.red, audioType: 'WRONG'});
	const [scoreCard, setScoreCard]             = useState({score: 0, total: Constant.GENERIC.QUIZ_COUNT});

	// LOCAL VARIABLE DECLARE
	let score         = scoreCard.score;

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		//navigation.addListener('focus', () => {
			// GENERATE QUIX
			_generateQuiz(route.params.quizData);
			// UPDATE STATUS COLOR
			StatusBar.setBarStyle('light-content');
			// HIDE LOADER 
			setScreenIsWaiting(false);
		//});
		// HIDE LOADER 
		setScreenIsWaiting(false);
	}, []);
  	
  	/**
	* GENERATE
	* @input  Array - Array of oBJECT
	* @return Array
	*/
	const _generateQuiz = (quizObj) => {
		Storage._retrieveData(Constant.STORAGE.QUIZ_QUESTION_COUNT + '_' + quizObj.id).then(item => {
    		// CHECK THE VALUES
    		let quizCount = Utils.isNotEmpty(item) ? JSON.parse(item) : 0;
			// FORMATTED DATA
			let quizData = QuizData.generateQuiz(quizObj.data, quizObj.id, quizCount);
			console.log('Stored index in quiz file TOALL - ' + (quizData.length - 2));
    		console.log('------------------ENDS------------------');
			// SAVE THE STATE
			setState(quizData);
		});
	}

	/**
	* SAVE ANSWER
	* @input  Object Chosen answer from the option
	* @return NA
	*/
	const _saveAnswer = (chosen) => {
		// SAVE ANSWER INTO THE STATE
		setSavedAnswered(chosen);
		// TURN THE BUTTON ON
		setIsAnswered(true);
	}

	/**
	* LEFT ARROW CUSTOMISE BUTTON
	* {isAnswered: false, score: 0, total: 0, currentChoice: ''}
	* @input  NA
	* @return NA
	*/
	const _findAnswer = (chosen, answer, currentSlideIndex) => {
		// SAVE ANSWER INTO THE STATE
		setSavedAnswered(chosen);
		// SCORE
		score = scoreCard.score;
		// CHECKING THE ANSWER
		if (chosen.id === answer) {
		  // ADDING THE SCORE
		  score = scoreCard.score + 1;
		  // SHOW SMASH SCREEN
		  setShowSmash({...showSmash, enable: true, icon: 'check', color: Colors.green, audioType: 'CORRECT'});
		} else {
		  // SHOW SMASH SCREEN
		  setShowSmash({...showSmash, enable: true, icon: 'remove', color: Colors.red, audioType: 'WRONG'});
		}
		// SHOW CORRECT ANSWER
		setTimeout(() => { 
			setCorrectAnswer(answer);
		}, 300);
		// MOVE TO NEXT QUESTION
		setTimeout(() => { 
			// RESET THE CORRECT ANSWER
			setCorrectAnswer('');
			// UPDATE THE SCORE STATE
			setScoreCard({...scoreCard, score: score});
			// MOVE TO ANOTHER SLIDE
			this.AppIntroSlider.goToSlide(currentSlideIndex + 1);
			// UPDATE ANSWER FLAG
			setIsAnswered(false);
			// SAVE ANSWER INTO THE STATE
			setSavedAnswered('');
		}, 2000);
		// SLIDE CHANGE FUNCTION
		setTimeout(() => { _onSlideChange(currentSlideIndex + 1); }, 2200);
	}

	/**
	* Next Slide
	* @input  Integer Currenct slide index
	* @return NA
	*/
	const nextSlide = (index) => {
		// MOVE TO ANOTHER SLIDE
		this.AppIntroSlider.goToSlide(index + 1);
	    // SLIDE CHANGE FUNCTION
	    _onSlideChange(index + 1);
	}

	/**
	* Navigate to details screen with lesson details object
	*
	* @input  Object - Single Lessons details object
	* @return NA
	*/
	const _navigate = (path) => {
		// NAVIGATING TO DETAILS SCREEN WITH SINGLE LESSONS OBJECT
		navigation.navigate(path)
	}

	/**
	* WHEN USER WANT TO MOVE TO SPECIFIC SLIDE
	*
	* @input  NA
	* @return NA
	*/
	const redoTest = () => {
		// GENERATE QUIX
		_generateQuiz(route.params.quizData);
		// GO TO SLIDE 0, FIRST SLIDE
		this.AppIntroSlider.goToSlide(0);
		// SLIDE CHANGE FUNCTION
		setTimeout(() => { _onSlideChange(0); }, 500);
	}

	/**
	* WHEN SLIDE CHANGE
	*
	* @input  Integer - Slide Index
	* @input  Integer - Previous slide Index
	* @return NA
	*/
	const _onSlideChange = (index, lastIndex) => {
		// CHECK WHETHER ITS COMPLETED SCREEN THEN HIDE THE PREVIOUS BUTTON
		if ([Constant.GENERIC.QUIZ_INTRO].indexOf(state[index].type) > -1) {
			setEnablePrevBtn(false);
			setEnableNextBtn(false);
			setEnableScroll(false);
			setScoreCard({...scoreCard, score: 0});
		} else if (state[index].type === Constant.GENERIC.QUIZ_SCORE) {
			setEnablePrevBtn(false);
			setEnableNextBtn(false);
			setEnableScroll(false);
			// UPDATE THE STARS IN THE MOBILE STORAGE
          	Utils.saveStars('', '', score);
         	// PLAY THE AUDIO
          	Utils.playAudio(Constant.GENERIC.SCORE_AUDIO, 0.4);
		} else if (state[index].type === Constant.GENERIC.QUIZ_EXERCISE) {
			setEnablePrevBtn(false);
			setEnableNextBtn(false);
			setEnableScroll(false);
         	// PLAY THE AUDIO
         	Utils.playAudio(Constant.GENERIC.QUIZ_AUDIO, 0.01);
		} else if (state[index].type === Constant.GENERIC.QUIZ_COMPLETE) {
			setEnablePrevBtn(false);
			setEnableNextBtn(false);
			setEnableScroll(false);
         	// PLAY THE AUDIO
          	Utils.playAudio(Constant.GENERIC.COMPLETE_AUDIO);
		}
		setSavedAnswered('');
		setCorrectAnswer('');
		setIsAnswered(false);

	}

	/**
	* WHEN USER WANT TO REDO A LESSON, NAVIGATE TO FIRST SCREEN
	*
	* @input  NA
	* @return NA
	*/
	const redoQuiz = () => {
		// GO TO SLIDE 0, FIRST SLIDE
		this.AppIntroSlider.goToSlide(0);
		// SLIDE CHANGE FUNCTION
		setTimeout(() => { _onSlideChange(0); }, 500);
	}

  /**
  * Feature used to generate each slide
  *
  * @input  Object - Slider object
  * @return Tags
  */
  const generateItem = ({ item, index }) => {
    let keyIndex = 'QUIZ_' + index + Math.floor((Math.random() * 200) + 1);
    if (item.type === Constant.GENERIC.QUIZ_INTRO) {
      return (
        <View style={{...styles.slide, backgroundColor: Colors.grayLightest}} key={keyIndex}>
          <Text style={[styles.slideTitle, styles.slideTitleQuestion]}>{'Islamic Quiz'}</Text>
          <View style={styles.slideImageContainer}><Image source={ExamIcon} style={styles.img120}/></View>
          <Text style={[styles.slideDesc, Utils.isIpad() ? styles.descM : '']}>Quiz will have {Constant.GENERIC.QUIZ_COUNT} questions. Keep attempting the quiz for more new questions.{'\n \n Ready? Lets go!'}</Text>
          <Button onPress={() => nextSlide(0)} icon={<Icon name={'play'} size={RFValue(15)} color={Colors.grayDarkest} type='font-awesome'/>}
              title={"Start"} 
              buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive]} 
              containerStyle={[styles.cSlideBtnContainer, styles.mt50]}
              titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}/>
        </View>
      );
    }  else if (item.type === Constant.GENERIC.QUIZ_SCORE) {
      return (
        <View style={[styles.slide, styles.slideType3]} key={keyIndex}>
        <Text style={[styles.slideTitle, styles.slideTitleQuestion]}>{'Score Board'}</Text>
        <View style={styles.slideType3ImageContainer}>
          <Image source={StarIcon} style={styles.slideType3Image}/>
        </View>
        <Text style={styles.slideType3Title}>Masha Allah</Text>
        <Text style={[styles.slideType3Desc, Utils.isIpad() ? styles.descM : '', Utils.isIpad() ? styles.mb0: '']}>Answered <Text style={styles.darkHigh}>{scoreCard.score} out of {scoreCard.total}</Text> correctly. {'\nYou won'} <Text style={styles.darkHigh}>{scoreCard.score} Star(s)</Text>. Redo the Quiz for more new questions.</Text>
         <View style={[styles.slideImageContainer, styles.rowDirection, Utils.isIpad() ? '' : styles.mt15]}>
            <Button onPress={redoTest} icon={<Icon name={'refresh'} size={RFValue(18)} color={Colors.grayDarkest} type='font-awesome'/>}
              title={"Replay"} buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive, styles.ph20]} 
              containerStyle={[styles.cSlideBtnContainer, styles.ph10, Utils.isIpad() ? styles.mt0 : '']}
              titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}/>
	          <Button onPress={() => navigation.goBack()} icon={<Icon name={'chevron-right'} size={RFValue(18)} color={Colors.grayDarkest} type='font-awesome'/>}
	          title={"All Quiz"} buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive, styles.ph20]} 
	          containerStyle={[styles.cSlideBtnContainer, styles.ph10, Utils.isIpad() ? styles.mt0 : '']} iconRight={true}
	          titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}/>
          </View>
      </View>
      );
    } else if (item.type === Constant.GENERIC.QUIZ_EXERCISE) {
      return (
        <View style={[styles.slide, styles.slideType2, styles.centerView]} key={keyIndex}>
        	
	        <View style={styles.noContainer}><Text style={styles.qno}>{index}</Text></View>
	        	<Text style={styles.optionQuestion}>{item.question}</Text>
	            <TouchableOpacity activeOpacity={1} underlayColor="transparent" style={[styles.optionContainer, (item.options[0].id === savedAnswered.id) ? styles.selectedOption : '', correctAnswer === item.options[0].id ? styles.correctOption : '']} onPress={() => _findAnswer(item.options[0], item.answer, index)}>
	            	<Text style={[styles.lightBtnText, styles.centerView, styles.tCenter]} >{item.options[0].option}</Text>
	            </TouchableOpacity>
	            <TouchableOpacity activeOpacity={1} underlayColor="transparent" style={[styles.optionContainer, (item.options[1].id === savedAnswered.id) ? styles.selectedOption : '', correctAnswer === item.options[1].id ? styles.correctOption : '']} onPress={() => _findAnswer(item.options[1], item.answer, index)}>
	            	<Text style={[styles.lightBtnText, styles.centerView, styles.tCenter]} >{item.options[1].option}</Text>
	            </TouchableOpacity>
	            <TouchableOpacity activeOpacity={1} underlayColor="transparent" style={[styles.optionContainer, (item.options[2].id === savedAnswered.id) ? styles.selectedOption : '', correctAnswer === item.options[2].id ? styles.correctOption : '']} onPress={() => _findAnswer(item.options[2], item.answer, index)}>
	            	<Text style={[styles.lightBtnText, styles.centerView, styles.tCenter]} >{item.options[2].option}</Text>
	            </TouchableOpacity>
	            <TouchableOpacity activeOpacity={1} underlayColor="transparent" style={[styles.optionContainer, (item.options[3].id === savedAnswered.id) ? styles.selectedOption : '', correctAnswer === item.options[3].id ? styles.correctOption : '']} onPress={() => _findAnswer(item.options[3], item.answer, index)}>
	            	<Text style={[styles.lightBtnText, styles.centerView, styles.tCenter]} >{item.options[3].option}</Text>
	            </TouchableOpacity>
        	</View>
      );
    } 
  }

  // RENDER HTML //  pointerEvents={"none"}
  return (
    <View style={styles.appbg}>
      	<SmashScreen show={showSmash} isShowModel={setShowSmash}/>
        <Loader show={screenIsWaiting} />
        <SafeAreaView style={styles.safeViewContainer}>
        <MHeader title={title}/>
        <View style={[styles.body, styles.p0]}>
          <AppIntroSlider
          	scrollEnabled={enableScroll}
          	ref={ref => this.AppIntroSlider = ref}
            dotClickEnabled={false}
            activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}} 
            dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
            showDoneButton={false} 
            showSkipButton={false} 
            showPrevButton={enablePrevBtn}
            showNextButton={enableNextBtn} 
            renderItem={generateItem} 
            data={state}
            renderNextButton={Utils.renderNextButton}
            renderPrevButton={Utils.renderPrevButton}
            onSlideChange={_onSlideChange}/>
        </View>
        </SafeAreaView>
        <Menu navigation={navigation} activeMenu={'QUIZ'}></Menu>
      </View>
    );
}

/*

<Icon name="refresh" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={redoTest} containerStyle={[styles.mh20]}/>
<Text style={[styles.redoLabel, styles.mt0, styles.mr0]} onPress={redoQuiz}>Replay Game</Text>
*/
