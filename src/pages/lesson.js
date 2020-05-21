/**
*
* lesson.js
* Lesson details.
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

// ALL CONTEXT FILES
import AppContext from '../context/appContext';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { Empty  } from '../component/complex/empty';
import { Menu  } from '../component/complex/menu';

// ALL ICON
import InfoIcon from '../../assets/img/help.png';
import MedalIcon from '../../assets/img/medal.png';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Setting  } from '../shared/setting';
import { Colors } from '../shared/colors';
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Data from '../shared/data';
import * as Storage from '../shared/storage';
import * as Generate from '../shared/generate';
import * as Sound from '../shared/sound';

export const LessonScreen = ({ navigation, route }) => {

    // DECLARE STATE VARIABLE
  const [isFetching, setIsFetching]           = useState(false);
  const [screenIsWaiting, setScreenIsWaiting] = useState(true);
  const [state, setState]                     = useState(route.params?.chapter ? route.params.chapter : []);
  const [completed, setCompleted]             = useState([]);
  const [showIntroPopup, setShowIntroPopup]   = useState(false);
  const [listView, setListView]               = useState(true);

  // DECLARE CONTEXT
  const appContextPayLoad = useContext(AppContext);

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // WHEN USER PRESS TAB, TRIGGER WILL OCCUR
    navigation.addListener('focus', () => {
      console.log('Chapters -' + JSON.stringify(state))
      // UPDATE STATUS COLOR
      StatusBar.setBarStyle('light-content');
      // SHOW POPUP ON EVERY TIME
      setShowIntroPopup(false);
      // UPDATING THE PAGE TITLE
      //navigation.setOptions({ title: state.pageTitle });
      // CHECK THE COMPLETED LIST
      getAllCompleted();
      // HIDE LOADER 
      setScreenIsWaiting(false);
    });
    // HIDE LOADER 
    setScreenIsWaiting(false);
  }, []);
  
  /**
  * Navigate to details screen with lesson details object
  *
  * @input  Object - Single Lessons details object
  * @return NA
  */
  const _navigate = (lesson) => {
    // PLAY THE CLICK AUDIO
    Sound.mainMenuClicked();
    // NAVIGATING TO DETAILS SCREEN WITH SINGLE LESSONS OBJECT
    navigation.navigate('Details', {lesson})
  }

  /**
    * Get all available data
    *
    * @input  NA
    * @return NA
    */
  const getAllData = () => {
    // UPDATE SINGLE CHAPATER FROM ROUTE PARAM
    setState(route.params?.chapter ? route.params.chapter : []);
  }

  /**
  * Feature use to check completed lesson
  *
  * @input  NA
  * @return NA
  */
  const getAllCompleted = () => {
    // GET ALLOWED RATE FROM STORAGE
    Storage._retrieveData(Constant.STORAGE.COMPLETED_LESSON).then(item => {
      // CHECK THE VALUES
      item = Utils.isNotEmpty(item) ? JSON.parse(item) : {};
      // MAKE COMPLETED LIST EMPTY
      setCompleted([]);
      //CHECK WHETHER EXIST
      if (item[state.id]) {
          setCompleted(item[state.id])
      }
    });
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
      return (
        <View  underlayColor="transparent" style={styles.cSlide}>
          <View style={[styles.chapterLesOverlay]}></View>
          <Text style={styles.progressBarTitle}>{item.title === 'Exercise' ? item.title : 'Lesson'}</Text>
          <TouchableOpacity style={{...styles.cCircleContainerOuter, ...styles.cCircleContainerSmallOuter, borderColor: item.bgColor}} onPress={() => _navigate(item)} underlayColor="transparent" disabled={!Utils.unlockLesson(index, completed, item.id)}>
            <Icon name="check" color={Colors.white} size={30} type='octicon' containerStyle={Utils.lessonCompleted(completed, item.id) ? styles.cSlideCompletedIcon : styles.displayN}/>
            <View style={{...styles.cCircleContainer, ...styles.cCircleContainerSmall, backgroundColor: item.bgColor, borderColor: item.bgColor, shadowColor: item.bgColor}}><Text style={[styles.cCircleNo, styles.cCircleNoSmall]}>{(index + 1)}</Text></View>
          </TouchableOpacity>
          <Text style={{...styles.cSlideChatLine, ...styles.mt20, fontSize: Setting.h1TextSize, ...styles.mb10}}>{item.desc}</Text>
          <Button onPress={() => _navigate(item)} icon={<Icon name={Utils.unlockLesson(index, completed, item.id) ? (Utils.lessonCompleted(completed, item.id) ? 'check' : 'play') : 'lock'} size={18} color={Utils.unlockLesson(index, completed, item.id)  ? (Utils.lessonCompleted(completed, item.id) ? Colors.white : Colors.grayDarkest) : Colors.white} type='font-awesome'/>}
        title={Utils.unlockLesson(index, completed, item.id) ? (Utils.lessonCompleted(completed, item.id) ? "Complete" : "Start") : 'Locked'} 
        buttonStyle={[styles.cSlideBtn, Utils.unlockLesson(index, completed, item.id)  ? (Utils.lessonCompleted(completed, item.id) ? styles.cSlideCompletedBtn : styles.cSlideBtnActive) : '']} 
        containerStyle={styles.cSlideBtnContainer}
        titleStyle={[styles.cSlideBtnLabel, Utils.unlockLesson(index, completed, item.id)  ? (Utils.lessonCompleted(completed, item.id) ? styles.cSlideBtnLabel : styles.cSlideBtnLabelLight) : '']}
        disabled={!Utils.unlockLesson(index, completed, item.id)}
        disabledStyle={styles.cSlideBtn}
        disabledTitleStyle={styles.cSlideBtnLabel}/>
        </View>
      );
  }

  // RENDER HTML
  return (
    <>
        <Loader show={screenIsWaiting} />
        <SafeAreaView style={styles.safeViewContainer}>
        <MHeader title={state.title} subtitle={state.desc}/>
        <Icon name="bullseye" color={Colors.white} size={40} type='font-awesome' onPress={() => setListView(!listView)} containerStyle={{position: 'absolute', right: '5%', top: '5%', display: 'none'}} underlayColor="transparent" />
        <View style={[styles.body, styles.p0, listView ? styles.displayN : '']}>
          <AppIntroSlider
            dotClickEnabled={false}
            activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}} 
            dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
            showDoneButton={false} 
            showSkipButton={false} 
            showPrevButton={true}
            showNextButton={true} 
            renderItem={generateItem} 
            data={state.data}
            renderNextButton={_renderNextButton}
            renderPrevButton={_renderPrevButton}/>
        </View>
        <View style={[styles.body, styles.pt10, listView ? '' : styles.displayN, styles.pb50]}>
          <View style={[state.message ? '' : styles.displayN, styles.infoContainer]}>
            <View style={styles.infoIconContainer}>
              <Image source={InfoIcon} style={styles.dLType1LeftIcon} />
            </View>
            <View style={styles.flex1}>
              <Text style={styles.infoMessage}>{state.message}</Text>
            </View>
          </View>
          <FlatList data={state.data}
              refreshControl={
                <RefreshControl 
                refreshing={isFetching} 
                onRefresh={getAllData} />
              }
              extraData={state.data}
              showsHorizontalScrollIndicator={true}
              renderItem = { ({item, index}) => (
              <>
                <TouchableOpacity onPress={() => _navigate(item)}  underlayColor="transparent" disabled={!Utils.unlockLesson(index, completed, item.id)}>
                  <View style={[styles.dLType1]} key={'LESSON_' + index}>
                  <View style={styles.dLType1LeftContainer}>
                    <View style={Utils.unlockLesson(index, completed, item.id) ? styles.dLType1LeftIconContainerActive : styles.dLType1LeftIconContainer}>
                      <Icon name="check" color={Colors.white} size={17} type='octicon' containerStyle={Utils.lessonCompleted(completed, item.id) ? styles.dLType1CompletedBtnContainer : styles.displayN}/>
                      <Image source={MedalIcon} style={styles.dLType1LeftIcon}/>
                    </View>
                  </View>
                  <View style={styles.dLType1Content}>
                  <Text style={styles.dLType1Title}>{item.title}</Text>
                    <Text style={styles.dLType1Desc} numberOfLines={1}>{item.desc}</Text>
                  </View>
                  <View style={styles.dLType1RightContainer}>
                    <Button onPress={() => _navigate(item)} icon={<Icon name={Utils.unlockLesson(index, completed, item.id) ? (Utils.lessonCompleted(completed, item.id) ? 'check' : 'play') : 'lock'} size={18} color={Utils.unlockLesson(index, completed, item.id)  ? (Utils.lessonCompleted(completed, item.id) ? Colors.white : Colors.grayDarkest) : Colors.white} type='font-awesome'/>}
                    title={Utils.unlockLesson(index, completed, item.id) ? (Utils.lessonCompleted(completed, item.id) ? "Done" : "Start") : 'Locked'} 
                    buttonStyle={[styles.dLType1RightBtn, Utils.unlockLesson(index, completed, item.id)  ? (Utils.lessonCompleted(completed, item.id) ? styles.cSlideCompletedBtn : styles.cSlideBtnActive) : '']} 
                    containerStyle={styles.dLType1RightBtnContainer}
                    titleStyle={[styles.dLType1RightBtnLabel, Utils.unlockLesson(index, completed, item.id)  ? (Utils.lessonCompleted(completed, item.id) ? styles.dLType1RightBtnLabel : styles.cSlideBtnLabelLight) : '']}
                    iconRight= {Utils.unlockLesson(index, completed, item.id)  ? false : true }
                    disabled={!Utils.unlockLesson(index, completed, item.id)}
                    disabledStyle={styles.dLType1RightBtn}
                    disabledTitleStyle={styles.dLType1RightBtnLabel}/>
                  </View>
                </View>
              </TouchableOpacity>
            </>
              )}
              ListEmptyComponent = {() => (
                <Empty icon={'group'} title='No Chapter Found' subtitle='Try again later.'/>
              )}
            keyExtractor = {(item, index) => 'lessonId_' + item.id.toString() +'_lessonIndex_' + index.toString()}/>
            
          </View>
          <Menu navigation={navigation} activeMenu={'CHAPTER'}></Menu>
        </SafeAreaView>
      </>
    );
}
