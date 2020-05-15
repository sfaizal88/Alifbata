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
import { ProgressCircle } from 'react-native-svg-charts'

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

export const DashboardScreen = ({ navigation }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching] = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState] = useState(Chapters.allChapter);
	const [awards, setAwards] = useState({trophy: 0, medals: 0, stars: 0});
	const [showAwards, setShowAwards] = useState('T');// T, M ,S
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
			
			// CHECK THE VALUES
			item = Utils.isNotEmpty(item) ? JSON.parse(item) : {};
			// TOTAL MEDALS
			let totalMedals = 0;
			// TOTAL TROPHY
			let totalTrophy = 0;
			// LOOPING THE MAIN ALL CHAPTERS DATAS
			state.forEach((chapter, chapterIndex) => {
				// BY DEFAULT CHAPTER COMPLETED FLAG IS TRUE
				let chapterCompleted = true;
				// LOOPING THE LESSON
				state[chapterIndex].data.forEach((lesson, lessonIndex) => {
					// CHECKING WHETHER LESSON ID EXIST IN THE COMPLETED LESSON STORAGE
					if (!Utils.isNotEmpty(item[chapter.id]) || item[chapter.id].indexOf(lesson.id) === -1) {
						chapterCompleted = false;
					}
				});
				if (chapterCompleted) {
					totalTrophy = totalTrophy + 1;
				}
				// COUNTING MEDALS
				totalMedals = (item[chapter.id]) ? totalMedals +  item[chapter.id].length : totalMedals;
			});		
			setAwards({...awards, medals: totalMedals, trophy: totalTrophy});
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
    		item = (item) ? JSON.parse(item) : 0;//alert(item);
    		// UPDATE THE STATE
    		setAwards({...awards, stars: item});
		});
	}

	// RENDER HTML
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer}>
	    	<MHeader title="Assalamu alaykum" icon="dashboard"/>
	    	<View style={[styles.body, styles.pt40, styles.overflowV]}>
	    		
	    		<View style={[showAwards === 'T' ? '' : styles.displayN]}>
	    			<Text style={styles.progressBarTitle}>Trophy</Text>
	    			<Text style={styles.progressBarNo}>{awards.trophy}</Text>
	    			<ProgressCircle style={styles.progressBar} progress={0.4} progressColor={Colors.red} strokeWidth={20}/>
	    		</View>
	    		<View style={[showAwards === 'M' ? '' : styles.displayN]}>
	    			<Text style={styles.progressBarTitle}>Medals</Text>
	    			<Text style={styles.progressBarNo}>{awards.medals}</Text>
	    			<ProgressCircle style={styles.progressBar} progress={0.7} progressColor={Colors.robinEggBlue} strokeWidth={20}/>
	    		</View>
	    		<View style={[showAwards === 'S' ? '' : styles.displayN]}>
	    			<Text style={styles.progressBarTitle}>Stars</Text>
	    			<Text style={styles.progressBarNo}>{awards.stars}</Text>
	    			<ProgressCircle style={styles.progressBar} progress={0.4} progressColor={Colors.green} strokeWidth={20}/>
	    		</View>
	    		<View style={[styles.rowDirection, styles.pt30]}>
	    			<View style={[styles.flex1, styles.centerView]}>
	    				<TouchableOpacity style={[styles.dashBox1, showAwards === 'M' ? styles.dashBoxActiveBlue : '']} onPress={() => setShowAwards('M')} underlayColor="transparent" >
	    					<Image source={MedalIcon} style={{width: 50, height: 50}} />
	    				</TouchableOpacity>
	    			</View>
	    			<View style={[styles.flex1, styles.centerView]}>
	    				<TouchableOpacity style={[styles.dashBox1, showAwards === 'T' ? styles.dashBoxActiveRed : '']} onPress={() => setShowAwards('T')} underlayColor="transparent" >
	    					<Image source={WinnerIcon} style={{width: 50, height: 50}} />
	    				</TouchableOpacity>
	    			</View>
	    			<View style={[styles.flex1, styles.centerView]}>
	    				<TouchableOpacity style={[styles.dashBox1, showAwards === 'S' ? styles.dashBoxActiveGreen : '']} onPress={() => setShowAwards('S')} underlayColor="transparent" >
	    					<Image source={StarIcon} style={{width: 50, height: 50}} />
	    				</TouchableOpacity>
	    			</View>
	    		</View>
	    		<View style={[styles.rowDirection, styles.mt40]}>
	    			<TouchableOpacity style={[styles.boxtypeLeft]} onPress={() => navigation.navigate('Chapter')}>
						<View style={[styles.rowDirection]}>
	    					<View style={[styles.flex2, styles.centerView, styles.alignS, styles.pl20]}>
								<Text style={[styles.dbBDesc, styles.whiteText]}>All Chapter</Text>
								<Text style={[styles.dbDesc, styles.whiteText]}>Start Learning</Text>
	    					</View>
	    					<View style={[styles.flex1, styles.centerView, styles.alignS, styles.pl5]}>
	    						<Icon name="bullhorn" color={Colors.white} size={30} type='font-awesome'/>
	    					</View>
	    				</View>
	    			</TouchableOpacity>
	    			<TouchableOpacity style={[styles.boxtypeRight]} onPress={() => navigation.navigate('Quiz')}>
						<View style={[styles.rowDirection]}>
	    					<View style={[styles.flex1, styles.centerView]}>
	    						<Icon name="create" color={Colors.white} size={30}/>
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
	    					<View style={[styles.flex2, styles.centerView, styles.alignS, styles.pl20]}>
								<Text style={[styles.dbBDesc, styles.whiteText]}>Badges</Text>
								<Text style={[styles.dbDesc, styles.whiteText]}>All Rewards</Text>
	    					</View>
	    					<View style={[styles.flex1, styles.centerView, styles.alignS, styles.pl5]}>
	    						<Icon name="redeem" color={Colors.white} size={30}/>
	    					</View>
	    				</View>
	    			</TouchableOpacity>
	    		</View>
	        	<Menu navigation={navigation} activeMenu={'HOME'}></Menu>
	        </View>
	  		</SafeAreaView>
	  	</>
  	);
}
