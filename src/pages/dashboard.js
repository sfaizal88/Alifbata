/**
*
* dashboard.js
* Dashboard screen.
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useContext} from 'react';
import { RefreshControl, StyleSheet, Text, View , Modal, FlatList, TouchableHighlight, Image, Dimensions, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { ProgressCircle } from 'react-native-svg-charts';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SplashScreen from 'react-native-splash-screen'

// ALL PAGE FILES
import { MHeader  } from './layout/header';

// ALL CONTEXT FILES
import AppContext from '../context/appContext';

// ICONS
import MedalIcon from '../../assets/img/medal.png';
import WinnerIcon from '../../assets/img/winner.png';
import StarIcon from '../../assets/img/star.png';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { Empty  } from '../component/complex/empty';
import { Menu  } from '../component/complex/menu';

// DATA
import * as Chapters from '../data/chapters';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Data from '../shared/data';
import * as Storage from '../shared/storage';
import * as Sound from '../shared/sound';

export const DashboardScreen = ({ navigation }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState(Chapters.allChapter);
  	const [showIntroPopup, setShowIntroPopup]   = useState(false);
	const [trophy, setTrophy]                   = useState(0);
	const [medals, setMedals]                   = useState(0);
	const [stars, setStars]                     = useState(0);
	const [showAwards, setShowAwards]           = useState('T');// T, M ,S

	// PERCENTAGE OF COMPLETED
	const [perTrophy, setPerTrophy] = useState(Data.totalChapter);
	const [perMedals, setPerMedals] = useState(Data.totalLesson);
	const [perStars, setPerStars] = useState(Data.totalStars);
	
	// DECLARE CONTEXT
	const appContextPayLoad = useContext(AppContext);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// LOAD
		getAllCompleted();
		// LOAD
		getTotalStars();
		// HIDE LOADER 
		setScreenIsWaiting(false);
		// SET OPEN INTRO POPUP
		setShowIntroPopup(true);
	}, []);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// UPDATE STATUS COLOR
      		StatusBar.setBarStyle('light-content');
			// LOAD
			getAllCompleted();
			// LOAD
			getTotalStars();
			// HIDE LOADER 
		  	setScreenIsWaiting(false);
		});
	}, []);



	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
        // HIDE SPLASH SCREEN ONCE PAGE LOADED
        // WHEN USER ALREADY VISITED INTRO AND CLOSED POPUP THEN HIDE THE SPLASH SCREEN
        Storage._retrieveData(Constant.STORAGE.VISITED).then(item => {
			// CHECKING WHEATHER USER ALREADY VISISTED THE INTRO AND HIDE POPUP
			// IF USER VISITED THEN HIDE SPLASH SCREEN
			if (Utils.isNotEmpty(item)) {
				setTimeout(() => { SplashScreen.hide(); }, 1000);
			}
        });
    }, []);

	/**
	* Feature use to check completed lesson
	*
	* @input  NA
	* @return NA
	*/
	const getAllCompleted = () => {
		// GET ALLOWED RATE FROM STORAGE
		Storage._retrieveData(Constant.STORAGE.COMPLETED_LESSON).then(item => {
			// FIND TOTAL COMPLETED CHAPTERS
			let completedChapters = Utils.totalCompletedChapter(item, Chapters.allChapter);
			// SAVE INTO STATE
			setTrophy(completedChapters);
			// FIND TOTAL COMPLETED LESSONS
			let completedLessons = Utils.totalCompletedLessons(item, Chapters.allChapter);
			// SAVE INTO STATE
			setMedals(completedLessons);
		});
	}

	/**
	* Feature use to check total stars
	*
	* @input  NA
	* @return NA
	*/
	const getTotalStars = () => {
		// GET TOTAL STARS FROM STORAGE
		Storage._retrieveData(Constant.STORAGE.COMPLETED_STARS).then(item => {
			// CHECK THE VALUES
    		item = (item) ? JSON.parse(item) : 0;
    		// UPDATE THE STATE
    		setStars(item);
		});
	}

	/**
	* Close Intro popup
	*
	* @return NA
	*/
	const closeIntroPopup = () => {
		// SET CLOSE INTRO POPUP
		setShowIntroPopup(false);
	}

	/**
    * Navigate between screen
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _navigate = (path) => {
	    // PLAY THE CLICK AUDIO
	    Sound.mainMenuClicked();
		// NAVIGATING TO DIFFERENT PATH
		navigation.navigate(path)
	}

	/**
    * Toggle between awards
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _toggleAwards = (code) => {
	    // PLAY THE CLICK AUDIO
	    Sound.mainMenuClicked();
		// SAVE THE AWARDS
		setShowAwards(code);
	}

	// RENDER HTML
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer}>
	    	<MHeader title="Assalamu Alaikum" icon="dashboard"/>
	    	<ScrollView style={[styles.body, styles.pt30, styles.pb10, styles.ph0, styles.topDashboard]}>
	    		<View style={[showAwards === 'T' ? '' : styles.displayN]}>
				    <Text style={[styles.progressBarTitle, styles.topDashboardText]}>Trophy</Text>
				    <Text style={[styles.progressBarNo, styles.topDashboardText]}>{trophy}</Text>
				    <ProgressCircle style={styles.progressBar} progress={trophy / perTrophy} progressColor={Colors.darkYellow} strokeWidth={14}/>
				</View>
				<View style={[showAwards === 'M' ? '' : styles.displayN]}>
				    <Text style={[styles.progressBarTitle, styles.topDashboardText]}>Medals</Text>
				    <Text style={[styles.progressBarNo, styles.topDashboardText]}>{medals}</Text>
				    <ProgressCircle style={styles.progressBar} progress={medals/perMedals} progressColor={Colors.red} strokeWidth={14}/>
				</View>
				<View style={[showAwards === 'S' ? '' : styles.displayN]}>
				    <Text style={[styles.progressBarTitle, styles.topDashboardText]}>Stars</Text>
				    <Text style={[styles.progressBarNo, styles.topDashboardText]}>{stars}</Text>
				    <ProgressCircle style={styles.progressBar} progress={stars/perStars} progressColor={Colors.greenBlue} strokeWidth={14}/>
				</View>
				<View style={[styles.rowDirection, styles.pt30]}>
				    <View style={[styles.flex1, styles.centerView]}>
				      <TouchableOpacity style={[styles.dashBoxSmall, showAwards === 'M' ? styles.dashBoxActive : '']} onPress={() => _toggleAwards('M')} underlayColor="transparent" >
				        <Image source={MedalIcon} style={styles.img25} />
				      </TouchableOpacity>
				    </View>
				    <View style={[styles.flex1, styles.centerView]}>
				      <TouchableOpacity style={[styles.dashBox1, showAwards === 'T' ? styles.dashBoxActive : '']} onPress={() => _toggleAwards('T')} underlayColor="transparent" >
				        <Image source={WinnerIcon} style={styles.img45} />
				      </TouchableOpacity>
				    </View>
				    <View style={[styles.flex1, styles.centerView]}>
				      <TouchableOpacity style={[styles.dashBoxSmall, showAwards === 'S' ? styles.dashBoxActive : '']} onPress={() => _toggleAwards('S')} underlayColor="transparent" >
				        <Image source={StarIcon} style={styles.img25} />
				      </TouchableOpacity>
				    </View>
				</View>
	    		<View style={styles.bottomDashboard}>
	    			<Text style={styles.dashboardTitle}>Train Your Skills</Text>
	    			<Text style={styles.dashboardSubTitle}>Islamic Knowledge</Text>
		    		<FlatList
				    horizontal
				    showsHorizontalScrollIndicator={false}
				    data={Data.dashboardHelpList}
				    renderItem = { ({item, index}) =>  (
                      	<TouchableOpacity style={{...styles.skillContainer, backgroundColor: item.bgColor}} key={index} onPress={() => _navigate(item.path)}>
	    					<Icon name={item.icon} color={item.color} size={70}  type='octicon' underlayColor="transparent" />
	    					<Text style={{...styles.skillTitle, color: item.color}}>{item.title}</Text>
	    					<Text style={{...styles.skillDesc, color: item.color}}>{item.desc}</Text>
							
	    				</TouchableOpacity>
                    )}
				    keyExtractor = {(item, index) => 'helpfullIndex_' + index.toString()}/>
	    			
	    		</View>
	        </ScrollView>
	        <Menu navigation={navigation} activeMenu={'HOME'}></Menu>
	  		</SafeAreaView>
	  	</>
  	);
}
