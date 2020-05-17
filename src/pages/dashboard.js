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
import { RefreshControl, StyleSheet, Text, View , FlatList, TouchableHighlight, Image, Dimensions, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { ProgressCircle } from 'react-native-svg-charts';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
import { ModelPopup  } from '../component/complex/model';

// DATA
import * as Chapters from '../data/chapters';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Data from '../shared/data';
import * as Storage from '../shared/storage';

export const DashboardScreen = ({ navigation }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState(Chapters.allChapter);
  	const [showIntroPopup, setShowIntroPopup]   = useState(true);
	const [trophy, setTrophy]                   = useState(0);
	const [medals, setMedals]                   = useState(0);
	const [stars, setStars]                     = useState(0);
	const [showAwards, setShowAwards]           = useState('T');// T, M ,S
	// DECLARE CONTEXT
	const appContextPayLoad = useContext(AppContext);
	let width = Dimensions.get('window').width; 

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// LOAD
		getAllCompleted();
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// UPDATE STATUS COLOR
      		StatusBar.setBarStyle('light-content');
			// UPDATING THE PAGE TITLE
			//navigation.setOptions({ title: 'Welcome to Alif Ba Ta' });
			// LOAD
			getAllCompleted();
			// LOAD
			getTotalStars();
			// HIDE LOADER 
		  	setScreenIsWaiting(false);
		});
		// HIDE LOADER 
		setScreenIsWaiting(false);
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

	// RENDER HTML
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer}>
	    	<MHeader title="Assalamu alaykum" icon="dashboard"/>
	    	<ScrollView style={[styles.body, styles.pt40, styles.pb70]}>
	    		<View style={[showAwards === 'T' ? '' : styles.displayN]}>
	    			<Text style={styles.progressBarTitle}>Trophy</Text>
	    			<Text style={styles.progressBarNo}>{trophy}</Text>
	    			<ProgressCircle style={styles.progressBar} progress={0.4} progressColor={Colors.green} strokeWidth={20}/>
	    		</View>
	    		<View style={[showAwards === 'M' ? '' : styles.displayN]}>
	    			<Text style={styles.progressBarTitle}>Medals</Text>
	    			<Text style={styles.progressBarNo}>{medals}</Text>
	    			<ProgressCircle style={styles.progressBar} progress={0.7} progressColor={Colors.robinEggBlue} strokeWidth={20}/>
	    		</View>
	    		<View style={[showAwards === 'S' ? '' : styles.displayN]}>
	    			<Text style={styles.progressBarTitle}>Stars</Text>
	    			<Text style={styles.progressBarNo}>{stars}</Text>
	    			<ProgressCircle style={styles.progressBar} progress={0.4} progressColor={Colors.red} strokeWidth={20}/>
	    		</View>
	    		<View style={[styles.rowDirection, styles.pt30]}>
	    			<View style={[styles.flex1, styles.centerView]}>
	    				<TouchableOpacity style={[styles.dashBox1, showAwards === 'M' ? styles.dashBoxActiveBlue : '']} onPress={() => setShowAwards('M')} underlayColor="transparent" >
	    					<Image source={MedalIcon} style={{width: RFValue(40), height: RFValue(40)}} />
	    				</TouchableOpacity>
	    			</View>
	    			<View style={[styles.flex1, styles.centerView]}>
	    				<TouchableOpacity style={[styles.dashBox1, showAwards === 'T' ? styles.dashBoxActiveGreen : '']} onPress={() => setShowAwards('T')} underlayColor="transparent" >
	    					<Image source={WinnerIcon} style={{width: RFValue(40), height: RFValue(40)}} />
	    				</TouchableOpacity>
	    			</View>
	    			<View style={[styles.flex1, styles.centerView]}>
	    				<TouchableOpacity style={[styles.dashBox1, showAwards === 'S' ? styles.dashBoxActiveRed : '']} onPress={() => setShowAwards('S')} underlayColor="transparent" >
	    					<Image source={StarIcon} style={{width: RFValue(40), height: RFValue(40)}} />
	    				</TouchableOpacity>
	    			</View>
	    		</View>
	    		<View style={[styles.rowDirection, styles.mt40]}>
	    			<TouchableOpacity style={[styles.boxtypeLeft]} onPress={() => navigation.navigate('Chapter')}>
						<View style={[styles.rowDirection]}>
	    					<View style={[styles.flex2, styles.centerView, styles.alignS, styles.pl15]}>
								<Text style={[styles.dbBDesc, styles.whiteText]}>All Chapter</Text>
								<Text style={[styles.dbDesc, styles.whiteText]}>Start Learning</Text>
	    					</View>
	    					<View style={[styles.flex1, styles.centerView, styles.alignS, styles.pl10]}>
	    						<Icon name="book" color={Colors.white} size={30}  type='octicon'/>
	    					</View>
	    				</View>
	    			</TouchableOpacity>
	    			<TouchableOpacity style={[styles.boxtypeRight]} onPress={() => navigation.navigate('Quiz')}>
						<View style={[styles.rowDirection]}>
	    					<View style={[styles.flex1, styles.centerView]}>
	    						<Icon name="light-bulb" color={Colors.white} size={30} type='octicon'/>
	    					</View>
	    					<View style={[styles.flex2, styles.centerView, styles.alignS]}>
								<Text style={[styles.dbBDesc, styles.whiteText]}>Quiz Game</Text>
								<Text style={[styles.dbDesc, styles.whiteText]}>Islamic Test</Text>
	    					</View>
	    				</View>
	    			</TouchableOpacity>
	    		</View>
	    		<View style={[styles.rowDirection, styles.mt20]}>
	    			<TouchableOpacity style={[styles.boxtypeLeft]} onPress={() => navigation.navigate('Badge')}>
						<View style={[styles.rowDirection]}>
	    					<View style={[styles.flex2, styles.centerView, styles.alignS, styles.pl15]}>
								<Text style={[styles.dbBDesc, styles.whiteText]}>Badges</Text>
								<Text style={[styles.dbDesc, styles.whiteText]}>All Rewards</Text>
	    					</View>
	    					<View style={[styles.flex1, styles.centerView, styles.alignS, styles.pl10]}>
	    						<Icon name="gift" color={Colors.white} size={30} type='octicon'/>
	    					</View>
	    				</View>
	    			</TouchableOpacity>
	    		</View>
	        </ScrollView>
	        <ModelPopup/>
	        <Menu navigation={navigation} activeMenu={'HOME'}></Menu>
	  		</SafeAreaView>
	  	</>
  	);
}
/*<ModelPopup show={showIntroPopup} isShowModel={setShowIntroPopup}/>*/
