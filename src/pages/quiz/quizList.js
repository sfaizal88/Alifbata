/**
*
* quizList.js
* All the Quiz screen.
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useContext, useRef} from 'react';
import { Animated, RefreshControl, StyleSheet, Text, View , FlatList, TouchableHighlight, Image, Dimensions, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppIntroSlider from 'react-native-app-intro-slider';

// ALL PAGE FILES
import { MHeader  } from './../layout/header';

// DATA
import * as Quiz from '../../data/quiz';

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';
import { Empty  } from '../../component/complex/empty';
import { Menu  } from '../../component/complex/menu';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import { Setting } from '../../shared/setting';
import * as Constant from '../../shared/constant';
import * as Utils from '../../shared/utils';
import * as Data from '../../shared/data';
import * as Storage from '../../shared/storage';
import * as Sound from '../../shared/sound';
import * as Animate from '../../shared/animate';

export const QuizListScreen = ({ navigation, route }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState(Quiz.quizList);
  	const [listView, setListView]               = useState(false);

	// ANIMATION
	const circleOutter = useRef(new Animated.Value(RFValue(40))).current;
	const circleInner = useRef(new Animated.Value(RFValue(20))).current;

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			setState(Quiz.quizList);
			// UPDATE STATUS COLOR
      		StatusBar.setBarStyle('light-content');
			// HIDE LOADER 
		  	setScreenIsWaiting(false);
			// SLIDE UPDATE
			_onSlideChange(0, 0);
			// MOVE TO SLIDE
			if (route.params && route.params.slideIndex) {
				_moveSlide(route.params.slideIndex);
			}
		});
		setState(Quiz.quizList);
		// HIDE LOADER 
		setScreenIsWaiting(false);
		// SLIDE UPDATE
		_onSlideChange(0, 0);
	}, []);


	/**
	* WHEN SLIDE CHANGE, AUTO LOAD THE NEXT SLIDE AUDIO
	*
	* @input  Integer - Slide Index
	* @input  Integer - Previous slide Index
	* @return NA
	*/
	const _onSlideChange = (index, lastIndex) => {
		//Animate.circleZoomInOut(circleOutter, circleInner);
	}

	/**
	* MOVE TO PARTICULAR SLIDE
	*
	* @input  Integer - Slide Index
	* @return NA
	*/
	const _moveSlide = (index) => {
	    // GO TO SLIDE 0, FIRST SLIDE
	    this.AppIntroSlider.goToSlide(index);
	}

	/**
    * Navigate between screen
    *
    * @input  Object - Single quiz details object
    * @return NA
    */
	const _navigate = (data) => {
	    // PLAY THE CLICK AUDIO
	    Sound.mainMenuClicked();
		// NAVIGATING TO QUIZ SCREEN WITH SINGLE QUIZ OBJECT
		navigation.navigate('Quiz', {quizData: data})
	}

	/**
    * Feature used to generate each slide
    *
    * @input  Object - Slider object
    * @return Tags
    */
    const generateItem = ({ item, index }) => {
    	console.log('Quiz Name: ' + item.title + ' Quiz, Total questions: ' + item.data.length);
        return (
          <View  underlayColor="transparent" style={styles.cSlide} key={'LIST_TYPE3_' + index}>
          	<View style={[styles.chapterLesOverlay]}></View>
          	<View style={[styles.disableOverlay, item.active ? styles.disableOverlayHide : '']}></View>
          	<Text style={[styles.progressBarTitle]}>{item.title}{'\nQuiz'}</Text>
            <TouchableOpacity onPress={() => _navigate(item)} underlayColor="transparent" disabled={!item.active}>
	            <Animated.View style={[styles.cCircleContainerOuter, {borderColor: item.bgColor, borderWidth: circleOutter}]}>
	            	<Animated.View style={[styles.cCircleContainerAnimate, {borderWidth: circleInner, backgroundColor: item.bgColor, borderColor: item.bgColor, shadowColor: item.bgColor}]}>
	            		<Image source={item.img} style={{width: RFValue(80), height: RFValue(80)}}/>
	            	</Animated.View>
	            </Animated.View>
            </TouchableOpacity>
            <Text style={[styles.cSlideChatLine, styles.mt20]}>{item.desc}</Text>
            <Button onPress={() => _navigate(item)}
            	icon={<Icon name={item.active ? 'play' : 'lock'} size={RFValue(15)} color={item.active ? Colors.grayDarkest : Colors.white} type='font-awesome'/>}
  				title={item.active ? "Play" : "Coming Soon"} 
  				buttonStyle={[styles.cSlideBtn, item.active ? styles.cSlideBtnActive : '']} 
  				containerStyle={styles.cSlideBtnContainer}
  				titleStyle={[styles.cSlideBtnLabel, item.active ? styles.cSlideBtnLabelLight : '']}
  				disabled={!item.active}
  				disabledStyle={styles.cSlideBtn}
  				disabledTitleStyle={styles.cSlideBtnLabel}
  				/>
  			<Icon iconStyle={!item.active ? '' : styles.displayN} containerStyle={[styles.disableOverlayLabel, !item.active ? '' : styles.displayN]} name={'lock'} size={RFValue(50)} color={Colors.white} type='font-awesome'/>
          </View>
        );
    }

	// RENDER HTML
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer}>
	    	<MHeader title="All Quiz" icon="dashboard"/>
	    	<Icon iconStyle={styles.displayN} name="bullseye" color={Colors.white} size={40} type='font-awesome' onPress={() => setListView(!listView)} containerStyle={{position: 'absolute', right: '5%', top: '5%', display: 'none'}} iconStyle={{display: 'none'}} underlayColor="transparent" />
	    	
	    	<View style={[styles.body, styles.p0, styles.pb15, listView ? styles.displayN : '']}>
				<AppIntroSlider
				ref={ref => this.AppIntroSlider = ref}
				dotClickEnabled={true}
				activeDotStyle={{backgroundColor: Colors.primary}} 
				dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
				showDoneButton={false} 
				showSkipButton={false} 
				showPrevButton={true}
				showNextButton={true} 
				renderItem={generateItem} 
				data={state}
				renderNextButton={Utils.renderNextButton}
				renderPrevButton={Utils.renderPrevButton}
        		onSlideChange={_onSlideChange}/>
			</View>
	  		</SafeAreaView>
	  		<Menu navigation={navigation} activeMenu={'QUIZ'}></Menu>
	  	</>
  	);
}
