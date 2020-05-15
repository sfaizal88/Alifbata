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

// ALL PAGE FILES
import { MHeader  } from './layout/header';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { Menu  } from '../component/complex/menu';
import { SmashScreen  } from '../component/complex/smashScreen';

// ALL ICON
import InfoIcon from '../../assets/img/help.png';
import MedalIcon from '../../assets/img/medal.png';
import ExamIcon from '../../assets/img/exam.png';
import QuizIcon from '../../assets/img/quiz.png';
import StarIcon from '../../assets/img/star.png';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Setting  } from '../shared/setting';
import { Colors } from '../shared/colors';
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Data from '../shared/data';
import * as Storage from '../shared/storage';
import * as Generate from '../shared/generate';

// ALL DATA
import * as Quiz from '../data/quiz';


export const QuizScreen = ({ navigation, route }) => {

    // DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState(Quiz.data);
	const [enablePrevBtn, setEnablePrevBtn]     = useState(true);
	const [enableNextBtn, setEnableNextBtn]     = useState(true);
	const [savedAnswered, setSavedAnswered]     = useState('');
  	const [isAnswered, setIsAnswered]           = useState(false);
	const [showSmash, setShowSmash]             = useState({enable: false, icon: 'remove', color: Colors.red, audioType: 'WRONG'});
	const [scoreCard, setScoreCard]             = useState({score: 0, total: Quiz.data.length - 3});

	// LOCAL VARIABLE DECLARE
  	let allQuiz       = Quiz.data;
	let _keyExtractor = (allQuiz) => allQuiz.id;
	let score = scoreCard.score;

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
		  // UPDATE STATUS COLOR
		  StatusBar.setBarStyle('light-content');
		  // PULL DATA
		  getAllData();
		  // HIDE LOADER 
		  setScreenIsWaiting(false);
		});
		// HIDE LOADER 
		setScreenIsWaiting(false);
	}, []);
  	
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
		// MOVE TO NEXT QUESTION
		setTimeout(() => { 
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
	* Get all available data
	*
	* @input  NA
	* @return NA
	*/
	const getAllData = () => {
		// UPDATE SINGLE CHAPATER FROM ROUTE PARAM
		setState(Quiz.data);
	}

	/**
	* WHEN USER WANT TO MOVE TO SPECIFIC SLIDE
	*
	* @input  NA
	* @return NA
	*/
	const redoTest = () => {
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
			setEnableNextBtn(true);
			setScoreCard({...scoreCard, score: 0, total: 0});
		} else if (state[index].type === Constant.GENERIC.QUIZ_SCORE) {
			setEnablePrevBtn(false);
			setEnableNextBtn(true);
			// UPDATE THE STARS IN THE MOBILE STORAGE
          	Utils.saveStars('', '', score);
		} else if (state[index].type === Constant.GENERIC.QUIZ_EXERCISE) {
			setEnablePrevBtn(false);
			setEnableNextBtn(false);
			// UPDATE THE STARS IN THE MOBILE STORAGE
          	Utils.saveStars('', '', score);
		} else if (state[index].type === Constant.GENERIC.QUIZ_COMPLETE) {
			setEnablePrevBtn(true);
			setEnableNextBtn(true);
		}
		setSavedAnswered('');
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
  * RIGHT ARROW CUSTOMISE BUTTON
  *
  * @input  NA
  * @return NA
  */
  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="angle-right" iconStyle={styles.nextBtn} size={30} type="font-awesome" underlayColor="transparent"></Icon>
      </View>
    );
  }

  /**
  * LEFT ARROW CUSTOMISE BUTTON
  *
  * @input  NA
  * @return NA
  */
  const _renderPrevButton = () => {
    return (  
      <View style={styles.buttonCircle}>
        <Icon name="angle-left" iconStyle={styles.prevBtn}  size={30} type="font-awesome" underlayColor="transparent"></Icon>
      </View>
    );
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
          <Text style={[styles.slideTitle, styles.slideTitleQuestion]}>{'Quiz'}</Text>
          <View style={styles.slideImageContainer}><Image source={ExamIcon} style={styles.slideImage}/></View>
          <Text style={[styles.slideDesc]}>{'Answer the following islamic question.\n \n Ready? Lets go!'}</Text>
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
        <Text style={styles.slideType3Desc}>Answered <Text style={styles.darkHigh}>{scoreCard.score} out of {scoreCard.total}</Text> correctly. {'\nYou Won'} <Text style={styles.darkHigh}>{scoreCard.score} Star(s)</Text>.</Text>
         <View style={[styles.slideImageContainer, styles.rowDirection, styles.mt15]}>
          <View style={[styles.flex1, styles.centerViewRight]}>
            <View style={styles.centerView}>
              <Icon name="refresh" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={redoTest} containerStyle={[styles.mh20]}/>
              <Text style={[styles.redoLabel, styles.mt0, styles.mr0]} onPress={redoQuiz}>Replay Game</Text>
            </View>
          </View>
          <View style={[styles.flex1, styles.centerViewLeft]}>
            <View style={styles.centerView}>
              <Icon name="chevron-right" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => nextSlide(index)} containerStyle={[styles.mh20]}/>
              <Text style={[styles.nextLessonLabel, styles.mt0, styles.mr0]}  onPress={() => nextSlide(index)} >Done</Text>
            </View>
          </View>
        </View>
      </View>
      );
    } else if (item.type === Constant.GENERIC.QUIZ_EXERCISE) {
      return (
        <View style={[styles.slide, styles.slideType2, styles.centerView]} key={keyIndex}>
        	
	        <View style={styles.noContainer}><Text style={styles.qno}>{item.id}</Text></View>
	        	<Text style={styles.optionQuestion}>{item.question}</Text>
	            <TouchableOpacity style={[styles.optionContainer, (item.options[0].id === savedAnswered.id) ? styles.selectedOption : '']} onPress={() => _findAnswer(item.options[0], item.answer, index)}>
	            	<Text style={styles.lightBtnText} >{item.options[0].option}</Text>
	            </TouchableOpacity>
	            <TouchableOpacity style={[styles.optionContainer, (item.options[1].id === savedAnswered.id) ? styles.selectedOption : '']} onPress={() => _findAnswer(item.options[1], item.answer, index)}>
	            	<Text style={styles.lightBtnText} >{item.options[1].option}</Text>
	            </TouchableOpacity>
	            <TouchableOpacity style={[styles.optionContainer, (item.options[2].id === savedAnswered.id) ? styles.selectedOption : '']} onPress={() => _findAnswer(item.options[2], item.answer, index)}>
	            	<Text style={styles.lightBtnText} >{item.options[2].option}</Text>
	            </TouchableOpacity>
	            <TouchableOpacity style={[styles.optionContainer, (item.options[3].id === savedAnswered.id) ? styles.selectedOption : '']} onPress={() => _findAnswer(item.options[3], item.answer, index)}>
	            	<Text style={styles.lightBtnText} >{item.options[3].option}</Text>
	            </TouchableOpacity>
        </View>
      );
    } 
  }

  // RENDER HTML
  return (
    <View style={styles.appbg}>
      	<SmashScreen show={showSmash} isShowModel={setShowSmash}/>
        <Loader show={screenIsWaiting} />
        <SafeAreaView style={styles.safeViewContainer}>
        <MHeader title={'Quiz'}/>
        <View style={[styles.body, styles.p0]}>
          <AppIntroSlider
          	ref={ref => this.AppIntroSlider = ref}
          	keyExtractor={_keyExtractor}
            dotClickEnabled={false}
            activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}} 
            dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
            showDoneButton={false} 
            showSkipButton={false} 
            showPrevButton={enablePrevBtn}
            showNextButton={enableNextBtn} 
            renderItem={generateItem} 
            data={state}
            renderNextButton={_renderNextButton}
            renderPrevButton={_renderPrevButton}
            onSlideChange={_onSlideChange}/>


            <Menu navigation={navigation} activeMenu={'QUIZ'}></Menu>
        </View>
        </SafeAreaView>
      </View>
    );
}
