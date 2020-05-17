/**
*
* badge.js
* Badge screen.
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
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL PAGE FILES
import { MHeader  } from './layout/header';

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

export const BadgeScreen = ({ navigation }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
  	const [completed, setCompleted]             = useState([]);
	const [state, setState]                     = useState(Chapters.allChapter);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// LOAD
			getAllCompleted();
			// UPDATE STATUS COLOR
      		StatusBar.setBarStyle('light-content');
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
			// LOOPING THE MAIN ALL CHPATER DATAS
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
				// IF ALL THE LESSON COMPLETED
				if (chapterCompleted) {
					console.log('Completed - ' + chapter.id);
					setCompleted(completed => [...completed, chapter.id]);
				}
			});
		});
	}

	// RENDER HTML
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer}>
	    	<MHeader title="Badges" icon="dashboard"/>
	    	<View style={[styles.body, styles.pt20, styles.overflow]}>
	    		<FlatList data={Data.badges} extraData={Data.badges}
                    showsHorizontalScrollIndicator={true}
                    numColumns={3}
                    renderItem = { ({item, index}) =>  (
                      <View style={styles.badgeContainer} key={index}>
	    				<View style={[styles.circleBadge, completed.indexOf('chapter' + item.id) > -1 ? styles.activeBadge : '']}>
							<Image source={item.img} style={styles.badge}/>
							</View>
							<Text style={[styles.badgeLabel]}>{item.text}</Text>
	    				</View>
                    )}
                keyExtractor = {(item, index) => 'badgeIndex_' + index.toString()}/>
	        </View>
	  		</SafeAreaView>
	  		<Menu navigation={navigation} activeMenu={'BADGE'}></Menu>
	  	</>
  	);
}
