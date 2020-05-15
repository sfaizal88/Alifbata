/**
*
* termsncondition.js
* Terms and Condition Screen
*
* @author - Faizal
* @date   - 24 April 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import Sound from 'react-native-sound';
import { Html5Entities } from 'html-entities'; 

// ALL PAGE FILES
import { MHeader  } from './layout/header';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { SmashScreen  } from '../component/complex/smashScreen';
import { Menu  } from '../component/complex/menu';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as DFormat from '../shared/dformat';
import * as Data from '../shared/data';
import * as Utils from '../shared/utils';
import * as Constant from '../shared/constant';
import * as Storage from '../shared/storage';

// IMAGES
import WinnerIcon from '../../assets/img/winner.png';
import QuestionIcon from '../../assets/img/question.png';
import OptionIcon from '../../assets/img/option.png';
import StarIcon from '../../assets/img/star.png';
import MedalIcon from '../../assets/img/medal.png';

export const DetailsScreen = ({ navigation, route }) => {

  // DECLARE STATE VARIABLE
  const [screenIsWaiting, setScreenIsWaiting] = useState(true);
  const [state, setState] = useState(route.params?.lesson ? route.params.lesson : []);
  const [activeState, setActiveState] = useState({});
  const [enablePrevBtn, setEnablePrevBtn] = useState(true);
  const [enableNextBtn, setEnableNextBtn] = useState(true);
  const [showSmash, setShowSmash]   = useState({enable: false, icon: 'remove', color: Colors.red, audioType: 'WRONG'});
  const [savedAnswered, setSavedAnswered] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [scoreCard, setScoreCard] = useState({score: 0, total: 0, redoSlideIndex: 0, questionNo: 1});

  // LOCAL VARIABLE DECLARE
  let allLesson     = route.params?.lesson ? route.params.lesson : []
  let _keyExtractor = (allLesson) => allLesson.key;
  let score         = scoreCard.score;

  // LOCAL OBJECT DECLARE
  const entities = new Html5Entities();
  Sound.setCategory("Playback");

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // WHEN USER PRESS TAB, TRIGGER WILL OCCUR
    navigation.addListener('focus', () => {
      // UPDATING THE PAGE TITLE
      //navigation.setOptions({ title: state.pageTitle });
      // UPDATE STATUS COLOR
      StatusBar.setBarStyle('light-content');
      // PLAY FIRST AUDIO
      setTimeout(() => { 
        // IF THE LESSON TYPE IS L (LETTER) THE LOAD THE AUDIO
        if (state.data[0].type === Constant.GENERIC.LETTER_LESSON) {
          playAudio(state.data[0].audio) 
        }
      }, 500);
      // HIDE LOADER 
      setScreenIsWaiting(false);
    });
    // TURNING OFF THE LOADER
    setScreenIsWaiting(false);
  }, []);

  /**
  * When user finish the lesson, move to previous page
  *
  * @input  NA
  * @return NA
  */
  const onFinished = () => {
      // NAVIGATE TO LESSON PAGE
      navigation.navigate('Lesson');
  }

	/**
  * PLAY AUDIO WHEN CLICK PLAY BUTTON
  *
  * @input  NA
  * @return NA
  */
  const playAudio = (path) => {
    // LOAD AUDIO BY URL
  	var soundActive = new Sound(path,
      (error, sound) => {
        if (error) {
          alert('Sound error -' + error.message);
          return;
        }
        // WHEN LOADED FULLY, PLAY THE AUDIO
        soundActive.play(() => {
          soundActive.release();
        });
      });
  }

  /**
  * WHEN SLIDE CHANGE, AUTO LOAD THE NEXT SLIDE AUDIO
  *
  * @input  Integer - Slide Index
  * @input  Integer - Previous slide Index
  * @return NA
  */
  const _onSlideChange = (index, lastIndex) => {
      // LOAD AUDIO AFTER 0.5 SECOND
      setTimeout(() => { playAudio(state.data[index].audio) }, 500);
      // CHECK WHETHER ITS COMPLETED SCREEN THEN HIDE THE PREVIOUS BUTTON
      if (state.data[index].type === Constant.GENERIC.LESSON_COMPLETED) {
          // DISABLE BACK BUTTON
          setEnablePrevBtn(false);
          // TRIGGER ON COMPLETE FUNCTION AND SAVE THE COMPLETED LESSON INTO THE MOBILE STORAGE
          _onCompleted();
      } 
      // CHECK WHETHER USER IN RANDOM / CHOSE THE BEST INTRO SCREEN
      else if ([Constant.GENERIC.RANDOM_QUESTION_INTRO, Constant.GENERIC.CHOOSE_BEST_INTRO].indexOf(state.data[index].type) > -1 ) {
          // DISABLE BACK BUTTON
          setEnablePrevBtn(false);
          // FIND THE TOTAL QUESTIONS
          if (Constant.GENERIC.CHOOSE_BEST_INTRO === state.data[index].type) {
            // FINDING TOTAL BEST OF CHOISE QUESTION
            let totalBestOfChoiceQ = state.data.filter(item => {
              return item.type === Constant.GENERIC.CHOOSE_BEST_EXERCISE;
            });
            // UPDATING IN THE STATE
            setScoreCard({...scoreCard, score: 0, total: totalBestOfChoiceQ.length, redoSlideIndex: index + 1, questionNo: 1});
            setIsAnswered(false);
          } else {
            // FINDING TOTAL BEST OF CHOISE QUESTION
            let totalRandomQ = state.data.filter(item => {
              return item.type === Constant.GENERIC.RANDOM_QUESTION_EXERCISE;
            });
            // RESETING THE SAVED ANSWERED AND IS ANSWERED FLAG
            setSavedAnswered({}); 
            setIsAnswered(false);
            // UPDATING IN THE STATE
            setScoreCard({...scoreCard, score: 0, total: totalRandomQ.length, redoSlideIndex: index + 1, questionNo: 1});
            setIsAnswered(false);
          }
      }
      // CHECK WHETHER USER IN CHOSE THE BEST EXERCISE SCREEN
      else if (Constant.GENERIC.CHOOSE_BEST_EXERCISE === state.data[index].type) {
          // PLAY FIRST AUDIO
          setTimeout(() => { 
            playAudio(state.data[index].answer.audio);
          }, 500);
          // DISABLE BACK BUTTON
          setEnablePrevBtn(false);
          // DISABLE NEXT BUTTON
          setEnableNextBtn(false);
          // RESETING THE SAVED ANSWERED AND IS ANSWERED FLAG
          setSavedAnswered({}); 
          // UPDATE ANSWER FLAG
          setIsAnswered(false);

      } 
      // CHECK WHETHER USER IN RANDOM  EXERCISE SCORE SCREEN
      else if ([Constant.GENERIC.RANDOM_QUESTION_SCORE, Constant.GENERIC.CHOOSE_BEST_SCORE].indexOf(state.data[index].type) > -1 ) {
          // UPDATE THE STARS IN THE MOBILE STORAGE
          Utils.saveStars('', '', score);
          // RESETING THE SAVED ANSWERED AND IS ANSWERED FLAG
          setSavedAnswered({}); 
          setIsAnswered(false);
          // DISABLE NEXT BUTTON
          setEnableNextBtn(false);
      } 
       // CHECK WHETHER USER IN RANDOM  EXERCISE
      else if (Constant.GENERIC.RANDOM_QUESTION_EXERCISE === state.data[index].type) {
          // RESETING THE SAVED ANSWERED AND IS ANSWERED FLAG
          setSavedAnswered({}); 
          setIsAnswered(false);
          // DISABLE BACK BUTTON
          setEnablePrevBtn(false);
          // DISABLE NEXT BUTTON
          setEnableNextBtn(false);
      } else {
        // ENABLE BACK BUTTON
        setEnablePrevBtn(true);
        // ENABLE NEXT BUTTON
        setEnableNextBtn(true);
      }
  };

  /**
  * WHEN LESSON COMPLETED, MARK LESSON AS COMPLETED AND MOVE BACK TO PREVIOUS PAGE
  *
  * @input  NA
  * @return NA
  */
  const _onCompleted = () => {
      // GET ALL COMPLETED LESSON WITH CHAPTERS
      Storage._retrieveData(Constant.STORAGE.COMPLETED_LESSON).then(item => {
        // CHECK THE VALUES
        item = Utils.isNotEmpty(item) ? JSON.parse(item) : {};
        //CHECK WHETHER CHAPTER EXISTS
        if (!item[state.chapter]) {
            // IF EMPTY, ADD THE COMPLETED LESSON ID TO THE MOBILE STORAGE 
            item[state.chapter] = [state.id]
        } else if (item[state.chapter].indexOf(state.id) === -1) {
            // IF NOT, PUSH THE COMPLETED LESSON ID TO THE MOBILE STORAGE
            item[state.chapter].push(state.id);
        }
        // SAVING THE VALUE IN MOBILE STORAGE 
        Storage._storeData(Constant.STORAGE.COMPLETED_LESSON, JSON.stringify(item));
      });
  };

  /**
  * WHEN USER WANT TO REDO A LESSON, NAVIGATE TO FIRST SCREEN
  *
  * @input  NA
  * @return NA
  */
  const redoLesson = () => {
    // DISABLE BACK BUTTON
    setEnablePrevBtn(true);
    // DISABLE NEXT BUTTON
    setEnableNextBtn(true);
    // GO TO SLIDE 0, FIRST SLIDE
    this.AppIntroSlider.goToSlide(0);
    // SLIDE CHANGE FUNCTION
    setTimeout(() => { _onSlideChange(0); }, 500);
    
  }

  /**
  * WHEN USER WANT TO MOVE TO SPECIFIC SLIDE
  *
  * @input  NA
  * @return NA
  */
  const redoTest = () => {
    // DISABLE BACK BUTTON
    setEnablePrevBtn(false);
    // DISABLE NEXT BUTTON
    setEnableNextBtn(false);
    // UPDATING IN THE STATE
    setScoreCard({...scoreCard, score: 0, questionNo: 1});
    // UPDATE ANSWER FLAG
    setIsAnswered(false);
    // GO TO SLIDE 0, FIRST SLIDE
    this.AppIntroSlider.goToSlide(scoreCard.redoSlideIndex);
    // SLIDE CHANGE FUNCTION
    setTimeout(() => { _onSlideChange(scoreCard.redoSlideIndex); }, 500);
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
  * DONE CUSTOMISE BUTTON
  *
  * @input  NA
  * @return NA
  */
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonDone}>
        <Icon name="check" iconStyle={styles.doneBtnLabel} type="octicon" underlayColor="transparent" containerStyle={styles.doneBtnContainer}></Icon>
      </View>
    );
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
    if (chosen.key === answer.key && answer.en === chosen.en) {
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
      setScoreCard({...scoreCard, score: score, questionNo: scoreCard.questionNo + 1});
      // MOVE TO ANOTHER SLIDE
      this.AppIntroSlider.goToSlide(currentSlideIndex + 1);
      // UPDATE ANSWER FLAG
      setIsAnswered(false);
      // SAVE ANSWER INTO THE STATE
      setSavedAnswered({});
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
  * SAVE ANSWER
  * @input  Object Chosen answer from the option
  * @return NA
  */
  const _saveAnswer = (chosen) => {
    // SAVE ANSWER INTO THE STATE
    setSavedAnswered(chosen);
    // PLAY THE AUDIO
    playAudio(chosen.audio);
    // TURN THE BUTTON ON
    setIsAnswered(true);
  }

  /**
  * Feature used to generate each slide
  *
  * @input  Object - Slider object
  * @return Tags // "key - {item.key}"
  * @types  L (Letter learning), R (Random letter exercise), C (Completed Page)
  */
  const generateItem = ({ item, index }) => {
    let keyIndex = 'DETAILS_' + index + Math.floor((Math.random() * 200) + 1);
    if (item.type === 'L') {
      return (
        <View style={[styles.slide, styles.slideType2]} key={keyIndex}>
          <View style={styles.topContainer}>
            <Text style={[styles.bigArabLetter]} >{ item.enableUnicode ? entities.decode(item.unicode) : item.ar}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Icon containerStyle={styles.circleIcon} name="volume-up" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => playAudio(item.audio)}/>
            <Text style={[styles.slideDesc, styles.slideType2Desc, styles.pt15]}>{entities.decode('&#8220;')} {item.en} {entities.decode('&#8221;')} {item.message ? '(' + item.message + ')' : ''}</Text>
          </View>
        </View>
      );
    } else if (item.type === Constant.GENERIC.RANDOM_QUESTION_EXERCISE) {
        return (
          <View style={[styles.slide, styles.slideType2]} key={keyIndex}>
            <View style={styles.noContainer}><Text style={styles.qno}>{scoreCard.questionNo}</Text></View>
            <View style={[styles.topContainer, styles.centerView, styles.pt15]}>
              <Text style={styles.slideLabel}>Pick the correct answer.</Text>
              <Text style={[styles.bigArabLetter]} >{ item.answer.enableUnicode ? entities.decode(item.answer.unicode) : item.answer.ar}</Text>
            </View>
            <View style={styles.bottomContainer}>
              <View style={{...styles.squareContainer, top: -80}}>
                <View style={styles.rowDirection}>
                  <View style={[styles.flex1, styles.alignE]}>
                    <TouchableOpacity underlayColor="transparent" style={[styles.slideSquare, (item.data[0].key === savedAnswered.key && item.data[0].en === savedAnswered.en) ? styles.selectedOption : '']} onPress={() => _saveAnswer(item.data[0])}>
                      <Icon name="volume-up" color={Colors.white} size={40} type="font-awesome" underlayColor="transparent"/>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.flex1, styles.alignS]}>
                    <TouchableOpacity underlayColor="transparent" style={[styles.slideSquare, (item.data[1].key === savedAnswered.key && item.data[1].en === savedAnswered.en) ? styles.selectedOption : '']} onPress={() => _saveAnswer(item.data[1])}>
                      <Icon name="volume-up" color={Colors.white} size={40} type="font-awesome" underlayColor="transparent"/>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.rowDirection}>
                  <View style={[styles.flex1, styles.alignE]}>
                    <TouchableOpacity underlayColor="transparent" style={[styles.slideSquare, (item.data[2].key === savedAnswered.key && item.data[2].en === savedAnswered.en) ? styles.selectedOption : '']} onPress={() => _saveAnswer(item.data[2])}>
                      <Icon name="volume-up" color={Colors.white} size={40} type="font-awesome" underlayColor="transparent"/>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.flex1, styles.alignS, item.data[3] ? '' : styles.displayN]}>
                    <TouchableOpacity underlayColor="transparent" style={[styles.slideSquare, (item.data[3].key === savedAnswered.key && item.data[3].en === savedAnswered.en) ? styles.selectedOption : '']} onPress={() => _saveAnswer(item.data[3])}>
                      <Icon name="volume-up" color={Colors.white} size={40} type="font-awesome" underlayColor="transparent"/>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={[styles.rowDirection, styles.mt20, styles.w100]}>
                  <View style={[styles.flex1, styles.alignE]}>
                    <TouchableOpacity style={[styles.btn, styles.successBtn]} onPress={() => playAudio(item.answer.audio)}>
                      <Text style={styles.lightBtnText}>Find Me</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.flex1, styles.alignS]}>
                    <TouchableOpacity style={[styles.btn, styles.secondaryBtn]}  disabled={!isAnswered} onPress={() => _findAnswer(savedAnswered, item.answer, index)}>
                      <Text style={[styles.darkBtnText, isAnswered ? '' : styles.disableBtnText]}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
    }  else if (item.type === Constant.GENERIC.LESSON_COMPLETED) {
      return (
        <View style={[styles.slide, styles.slideType3]} key={keyIndex}>
        <Text style={[styles.slideTitle, styles.slideTitleQuestion]}>{state.title}{'\nCompleted'}</Text>
        <View style={styles.slideType3ImageContainer}><Image source={MedalIcon} style={styles.slideType3Image}/></View>
        <Text style={styles.slideType3Title}>Masha Allah</Text>
        <Text style={styles.slideType3Desc}>Here's a <Text style={styles.darkHigh}>Medal</Text> to celebrate!</Text>
        <View style={[styles.slideImageContainer, styles.rowDirection, styles.mt15]}>
          <View style={[styles.flex1, styles.centerViewRight]}>
            <View style={styles.centerView}>
              <Icon name="refresh" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={redoLesson} containerStyle={[styles.mh20]}/>
              <Text style={[styles.redoLabel, styles.mt0, styles.mr0]} onPress={redoLesson}>Redo Lesson</Text>
            </View>
          </View>
          <View style={[styles.flex1, styles.centerViewLeft]}>
            <View style={styles.centerView}>
              <Icon name="chevron-right" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => navigation.goBack()} containerStyle={[styles.mh20]}/>
              <Text style={[styles.nextLessonLabel, styles.mt0, styles.mr0]}  onPress={() => navigation.goBack()} >Next Lesson</Text>
            </View>
          </View>
        </View>
      </View>
      );
    } else if (item.type === Constant.GENERIC.FOUR_LETTER_EXERCISE) {
      return (
        <View style={[styles.slide, styles.slideType2]} key={keyIndex}>
          <View style={{...styles.topContainer, top: -90}}>
            <Text style={[styles.bigArabLetter]} >{ item.enableUnicode ? entities.decode(item.unicode) : item.ar}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.squareContainer}>
              <View style={styles.rowDirection}>
                <View style={[styles.flex1, styles.alignE]}>
                  <View style={styles.slideSquare}>
                    <Text style={styles.mediumArabLetter}>{ item.data[0].enableUnicode ? entities.decode(item.data[0].unicode) : item.data[0].ar}</Text>
                    <Text style={styles.wSlideLabel}>Original</Text>
                  </View>
                </View>
                <View style={[styles.flex1, styles.alignS]}>
                  <View style={styles.slideSquare}>
                    <Text style={styles.mediumArabLetter}>{ item.data[1].enableUnicode ? entities.decode(item.data[1].unicode) : item.data[1].ar}</Text>
                    <Text style={styles.wSlideLabel}>Beginning</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rowDirection}>
                <View style={[styles.flex1, styles.alignE]}>
                  <View style={styles.slideSquare}>
                    <Text style={styles.mediumArabLetter}>{ item.data[2].enableUnicode ? entities.decode(item.data[2].unicode) : item.data[2].ar}</Text>
                    <Text style={styles.wSlideLabel}>Middle</Text>
                  </View>
                </View>
                <View style={[styles.flex1, styles.alignS]}>
                  <View style={styles.slideSquare}>
                    <Text style={styles.mediumArabLetter}>{ item.data[3].enableUnicode ? entities.decode(item.data[3].unicode) : item.data[3].ar}</Text>
                    <Text style={styles.wSlideLabel}>End</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.columnDirection, styles.centerView, styles.mt20]}>
                <Icon containerStyle={[styles.circleIcon, styles.w75]} name="volume-up" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => playAudio(item.audio)}/>
                <Text style={[styles.slideDesc, styles.slideType2Desc]}>{entities.decode('&#8220;')} {item.en} {entities.decode('&#8221;')}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }  else if (item.type === Constant.GENERIC.CHOOSE_BEST_EXERCISE) {
      return (
        <View style={[styles.slide, styles.slideType2]} key={keyIndex}>
          <View style={styles.noContainer}><Text style={styles.qno}>{scoreCard.questionNo}</Text></View>
          <View style={{...styles.topContainer, top: -80, justifyContent: 'center'}}>
            <Text style={styles.slideLabel}>Pick the correct answer.</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{...styles.squareContainer, top: -150}}>
              <View style={styles.rowDirection}>
                <View style={[styles.flex1, styles.alignE]}>
                  <TouchableOpacity style={[styles.slideSquare, (item.data[0].key === savedAnswered.key && item.data[0].en === savedAnswered.en) ? styles.selectedOption : '']} onPress={() => _findAnswer(item.data[0], item.answer, index)}>
                    <Text style={styles.mediumArabLetter}>{ item.data[0].enableUnicode ? entities.decode(item.data[0].unicode) : item.data[0].ar}</Text>
                    <Text style={styles.wSlideLabel}></Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.flex1, styles.alignS]}>
                  <TouchableOpacity style={[styles.slideSquare, (item.data[1].key === savedAnswered.key && item.data[1].en === savedAnswered.en) ? styles.selectedOption : '']} onPress={() => _findAnswer(item.data[1], item.answer, index)}>
                    <Text style={styles.mediumArabLetter}>{ item.data[1].enableUnicode ? entities.decode(item.data[1].unicode) : item.data[1].ar}</Text>
                    <Text style={styles.wSlideLabel}></Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.rowDirection}>
                <View style={[styles.flex1, styles.alignE]}>
                  <TouchableOpacity style={[styles.slideSquare, (item.data[2].key === savedAnswered.key && item.data[2].en === savedAnswered.en) ? styles.selectedOption : '']} onPress={() => _findAnswer(item.data[2], item.answer, index)}>
                    <Text style={styles.mediumArabLetter}>{ item.data[2].enableUnicode ? entities.decode(item.data[2].unicode) : item.data[2].ar}</Text>
                    <Text style={styles.wSlideLabel}></Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.flex1, styles.alignS]}>
                  <TouchableOpacity style={[styles.slideSquare, (item.data[3].key === savedAnswered.key && item.data[3].en === savedAnswered.en) ? styles.selectedOption : '']} onPress={() => _findAnswer(item.data[3], item.answer, index)}>
                    <Text style={styles.mediumArabLetter}>{ item.data[3].enableUnicode ? entities.decode(item.data[3].unicode) : item.data[3].ar}</Text>
                    <Text style={styles.wSlideLabel}></Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.columnDirection, styles.centerView, styles.mt20]}>
                <Icon containerStyle={[styles.circleIcon, styles.w75]} name="volume-up" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => playAudio(item.answer.audio)}/>
                <Text style={[styles.slideDesc, styles.slideType2Desc]}>{entities.decode('&#8220;')} {item.answer.en} {entities.decode('&#8221;')}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else if (item.type === Constant.GENERIC.RANDOM_QUESTION_INTRO) {
      return (
        <View style={{...styles.slide, backgroundColor: Colors.grayLightest}} key={keyIndex}>
          <Text style={[styles.slideTitle, styles.slideTitleQuestion]}>{'Guess \n the Sound'}</Text>
          <View style={styles.slideImageContainer}><Image source={QuestionIcon} style={styles.slideImage}/></View>
          <Text style={[styles.slideDesc]}>{'You will need to pick the correct audio for the arabic letter shown.\n \n Ready? Lets go!'}</Text>
        </View>
      );
    } else if (item.type === Constant.GENERIC.CHOOSE_BEST_INTRO) {
      return (
        <View style={{...styles.slide, backgroundColor: Colors.grayLightest}} key={keyIndex}>
          <Text style={[styles.slideTitle, styles.slideTitleQuestion]}>{'Guess \n the Letter'}</Text>
          <View style={styles.slideImageContainer}><Image source={OptionIcon} style={styles.slideImage}/></View>
          <Text style={[styles.slideDesc]}>{'You will need to pick the correct arabic letter for the audio given.\n \n Ready? Lets go!'}</Text>
        </View>
      );
    } else if (item.type === Constant.GENERIC.RANDOM_QUESTION_SCORE) {
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
              <Text style={[styles.redoLabel, styles.mt0, styles.mr0]} onPress={redoLesson}>Replay Game</Text>
            </View>
          </View>
          <View style={[styles.flex1, styles.centerViewLeft]}>
            <View style={styles.centerView}>
              <Icon name="chevron-right" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => nextSlide(index)} containerStyle={[styles.mh20]}/>
              <Text style={[styles.nextLessonLabel, styles.mt0, styles.mr0]}  onPress={() => nextSlide(index)} >Next Game</Text>
            </View>
          </View>
        </View>
      </View>
      );
    } else if (item.type === Constant.GENERIC.CHOOSE_BEST_SCORE) {
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
              <Text style={[styles.redoLabel, styles.mt0, styles.mr0]} onPress={redoLesson}>Replay Game</Text>
            </View>
          </View>
          <View style={[styles.flex1, styles.centerViewLeft]}>
            <View style={styles.centerView}>
              <Icon name="chevron-right" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => nextSlide(index)} containerStyle={[styles.mh20]}/>
              <Text style={[styles.nextLessonLabel, styles.mt0, styles.mr0]}  onPress={() => nextSlide(index)} >Next</Text>
            </View>
          </View>
        </View>
      </View>
      );
    }
  }

  return (
    <View style={styles.appbg}>
      <SmashScreen show={showSmash} isShowModel={setShowSmash}/>
      <Loader show={screenIsWaiting} />
      <SafeAreaView style={styles.safeViewContainer}>
      <MHeader title={state.title}/>
      <View style={[styles.body, styles.p0, styles.p0]}>
        <AppIntroSlider
        ref={ref => this.AppIntroSlider = ref}
        keyExtractor={_keyExtractor}
        dotClickEnabled={false}
        activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}} 
        dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
        showDoneButton={false} 
        showPrevButton={enablePrevBtn}
        showNextButton={enableNextBtn} 
        showSkipButton={false} 
        renderItem={generateItem} 
        data={state.data}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderPrevButton={_renderPrevButton}
        onSlideChange={_onSlideChange}
        onDone={_onCompleted}/>
        <Menu navigation={navigation} activeMenu={'CHAPTER'}></Menu>
      </View>
      </SafeAreaView>
    </View>
  );
} 
