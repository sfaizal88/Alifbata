/**
*
* gamelist.js
* All the Games screen.
*
* @author - Faizal
* @date   - 26 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useContext} from 'react';
import { RefreshControl, StyleSheet, Text, View , FlatList, TouchableHighlight, Image, Dimensions, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppIntroSlider from 'react-native-app-intro-slider';

//import { DeviceMotion } from 'expo-sensors';
// ALL PAGE FILES
import { MHeader  } from '../layout/header';

// DATA
import * as Game from '../../data/game/game';

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';
import { Empty  } from '../../component/complex/empty';
import { Menu  } from '../../component/complex/menu';
import { HowToPlayHeadsUp  } from '../../component/model/howToPlayHeadsUp';
import { HowToPlaySpyLetter  } from '../../component/model/howToPlaySpyLetter';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import { Setting } from '../../shared/setting';
import * as Constant from '../../shared/constant';
import * as Utils from '../../shared/utils';
import * as Data from '../../shared/data';
import * as Storage from '../../shared/storage';
import * as Sound from '../../shared/sound';

export const GameListScreen = ({ navigation, route }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState(Game.data);
  	const [listView, setListView]               = useState(false);
  	const [showHowtoPlayHU, setShowHowtoPlayHU] = useState(false);
  	const [showHowtoPlaySL, setShowHowtoPlaySL] = useState(false);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// CHANGE ORIENTATION
			Utils.setOrientation('PORTRAIT');
			// PULL DATA
			setState(Game.data);
			// UPDATE STATUS COLOR
      		StatusBar.setBarStyle('light-content');
			// HIDE LOADER 
		  	setScreenIsWaiting(false);
			// MOVE TO SLIDE
			if (route.params && route.params.slideIndex) {
				_moveSlide(route.params.slideIndex);
			}
		});
		// PULL DATA
		setState(Game.data);
		// CHANGE ORIENTATION
		Utils.setOrientation('PORTRAIT');
		// HIDE LOADER 
		setScreenIsWaiting(false);
	}, []);

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
    * @input  Object - Single game details object
    * @return NA
    */
	const _navigate = (data) => {
	    // PLAY THE CLICK AUDIO
	    Sound.mainMenuClicked();
		// NAVIGATING TO STEPS SCREEN WITH SINGLE QUIZ OBJECT
		navigation.navigate(data.path, {gameData: data})
	}

	/**
    * Navigate between screen
    *
    * @input  Object - Single game details object
    * @return NA
    */
	const toggleModel = (type) => {
	    if ( type === 'HU') {
	    	setShowHowtoPlayHU(true);	
	    } else if ( type === 'SL') {
	    	setShowHowtoPlaySL(true);
	    }
	}

	/**
    * Feature used to generate each slide
    *
    * @input  Object - Slider object
    * @return Tags
    */
    const generateItem = ({ item, index }) => {
        return (
          <View  underlayColor="transparent" style={styles.cSlide} key={'GAME_TYPE3_' + index}>
          	<View style={[styles.disableOverlay, item.active ? styles.disableOverlayHide : '']}></View>
          	<View style={[styles.chapterLesOverlay]}></View>
          	<Text style={[styles.progressBarTitle]}>{item.title}</Text>
            <Image source={item.img} style={styles.img200}/>
            <Text style={[styles.cSlideSubTitle, styles.mt20]}>{item.desc}</Text>
            <Text style={[styles.cSlideChatLine, styles.mt20]}>{item.details}</Text>
            <View style={[styles.slideImageContainer, styles.rowDirection]}>
				<Button onPress={() => _navigate(item)} icon={<Icon name={'play'} size={RFValue(15)} color={Colors.grayDarkest} type='font-awesome'/>}
				  title={"Start"} buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive, styles.ph20]} 
				  containerStyle={[styles.cSlideBtnContainer, styles.ph5, Utils.isIpad() ? styles.mt0 : '']}
				  titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}/>
				  <Button onPress={() => toggleModel(item.modelType)} icon={<Icon name={'bullhorn'} size={RFValue(15)} color={Colors.grayDarkest} type='font-awesome'/>}
				  title={"How to Play"} buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive, styles.ph20]} 
				  containerStyle={[styles.cSlideBtnContainer, styles.ph5, Utils.isIpad() ? styles.mt0 : '', item.showHowtoPlay ? '' : styles.displayN]}
				  titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}/>
			</View>
  			<Icon iconStyle={!item.active ? '' : styles.displayN} containerStyle={[styles.disableOverlayLabel, !item.active ? '' : styles.displayN]} name={'lock'} size={RFValue(50)} color={Colors.white} type='font-awesome'/>
          </View>
        );
    }

	// RENDER HTML 
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer}>
	    	<MHeader title="Game"/>
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
				renderPrevButton={Utils.renderPrevButton}/>
			</View>
	  		</SafeAreaView>
	  		<Menu navigation={navigation} activeMenu={'GAME'}></Menu>
	  		<HowToPlayHeadsUp show={showHowtoPlayHU} handleClose={() => setShowHowtoPlayHU(false)}/>
	  		<HowToPlaySpyLetter show={showHowtoPlaySL} handleClose={() => setShowHowtoPlaySL(false)}/>
	  	</>
  	);
}