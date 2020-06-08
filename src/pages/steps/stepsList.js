/**
*
* steps.js
* All the Steps screen.
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useContext, useRef} from 'react';
import {Animated, RefreshControl, StyleSheet, Text, View , FlatList, TouchableHighlight, Image, Dimensions, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppIntroSlider from 'react-native-app-intro-slider';

// ALL PAGE FILES
import { MHeader  } from '../layout/header';

// DATA
import * as Steps from '../../data/steps/steps';

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

export const StepsListScreen = ({ navigation, route }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState(Steps.data);
  	const [listView, setListView]               = useState(false);

	// ANIMATION
	const circleOutter = useRef(new Animated.Value(RFValue(40))).current;
	const circleInner = useRef(new Animated.Value(RFValue(20))).current;

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// PULL DATA
			setState(Steps.data);
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
		// NAVIGATING TO STEPS SCREEN WITH SINGLE QUIZ OBJECT
		navigation.navigate('Steps', {stepsData: data})
	}

	/**
    * Feature used to generate each slide
    *
    * @input  Object - Slider object
    * @return Tags
    */
    const generateItem = ({ item, index }) => {
        return (
          <View  underlayColor="transparent" style={styles.cSlide} key={'LIST_TYPE3_' + index}>
          	<View style={[styles.disableOverlay, item.active ? styles.disableOverlayHide : '']}></View>
          	<View style={[styles.chapterLesOverlay]}></View>
          	<Text style={[styles.progressBarTitle]}>{item.title}</Text>
          	<TouchableOpacity onPress={() => _navigate(item)} underlayColor="transparent" disabled={!item.active}>
	            <Animated.View style={[styles.cCircleContainerOuter, {borderColor: item.bgColor, borderWidth: circleOutter}]}>
	            	<Animated.View style={[styles.cCircleContainerAnimate, {borderWidth: circleInner, backgroundColor: item.bgColor, borderColor: item.bgColor, shadowColor: item.bgColor}]}>
	            		<Image source={item.img} style={styles.img80}/>
	            	</Animated.View>
	            </Animated.View>
            </TouchableOpacity>
            <Text style={[styles.cSlideSubTitle, styles.mt20]}>{item.desc}</Text>
            <Text style={[styles.cSlideChatLine, styles.mt20]}>{item.details}</Text>
            <Button onPress={() => _navigate(item)} 
            	underlayColor="transparent"
            	icon={<Icon name={item.active ? 'play' : 'lock'} size={RFValue(15)} color={item.active ? Colors.grayDarkest : Colors.white} type='font-awesome'/>}
  				title={item.active ? "Play" : "Coming Soon"} 
  				buttonStyle={[styles.cSlideBtn, item.active ? styles.cSlideBtnActive : '']} 
  				containerStyle={styles.cSlideBtnContainer}
  				titleStyle={[styles.cSlideBtnLabel, item.active ? styles.cSlideBtnLabelLight : '']}
  				disabled={!item.active}
  				disabledStyle={styles.cSlideBtn}
  				disabledTitleStyle={styles.cSlideBtnLabel}/>
  			<Icon iconStyle={!item.active ? '' : styles.displayN} containerStyle={[styles.disableOverlayLabel, !item.active ? '' : styles.displayN]} name={'lock'} size={RFValue(50)} color={Colors.white} type='font-awesome'/>
          </View>
        );
    }

	// RENDER HTML 
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer}>
	    	<MHeader title="Islamic Knowledge" icon="dashboard"/>
	    	<Icon name="bullseye" color={Colors.white} size={40} type='font-awesome' onPress={() => setListView(!listView)} iconStyle={styles.displayN} containerStyle={{position: 'absolute', right: '5%', top: '5%', display: 'none'}}  underlayColor="transparent" />
	    	
	    	<View style={[styles.body, styles.p0, styles.pb15, listView ? styles.displayN : '']}>
				<AppIntroSlider
				ref={ref => this.AppIntroSlider = ref}
				dotClickEnabled={false}
				activeDotStyle={{backgroundColor:  'rgba(0, 0, 0, 0)'}} 
				dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
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
	  		<Menu navigation={navigation} activeMenu={'STEPS'}></Menu>
	  	</>
  	);
}