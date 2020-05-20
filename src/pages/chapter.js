/**
*
* customer.js
* Customer details.
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
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL PAGE FILES
import { MHeader  } from './layout/header';

// ALL CONTEXT FILES
import AppContext from '../context/appContext';

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

// ALL ICON
import MedalIcon from '../../assets/img/medal.png';
import WinnerIcon from '../../assets/img/winner.png';

export const ChapterScreen = ({ navigation }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState(Chapters.allChapter);
  	const [completed, setCompleted]             = useState([]);
  	const [listView, setListView]               = useState(false);

	// DECLARE CONTEXT
	const appContextPayLoad = useContext(AppContext);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// REGENERATE CHAPTER
			setState(Chapters.allChapter);
			// UPDATE STATUS COLOR
      		StatusBar.setBarStyle('light-content');
			// PULL ALL CHAPTER DATAS
			getAllData();
			// CHECK THE COMPLETED LIST
      		getAllCompleted();
			// HIDE LOADER 
		  	setScreenIsWaiting(false);
		});
	}, []);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// REGENERATE CHAPTER
		setState(Chapters.allChapter);
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
					setCompleted(completed => [...completed, chapter.id]);
				}
			});
		});
	}
	
	/**
    * Navigate between screen
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _navigate = (chapter) => {
		// NAVIGATING TO LESSON SCREEN WITH SINGLE CHAPTER OBJECT
		navigation.navigate('Lesson', {chapter})
	}

	/**
    * Get all available data
    *
    * @input  NA
    * @return NA
    */
	const getAllData = () => {
		// SET UPATED ALL CHAPTERS DETAILS INTO STATE
		setState(Chapters.allChapter);
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
          	<View style={[styles.disableOverlay, !item.active ? '' : styles.displayN]}></View>
          	<Text style={[styles.progressBarTitle, item.active ? '' : styles.displayN]}>{'Chapter'}</Text>
            <TouchableOpacity style={{...styles.cCircleContainerOuter, borderColor: item.bgColor}} onPress={() => _navigate(item)} underlayColor="transparent" disabled={!Utils.unlockChapter(index, completed, item.id) || !item.active}>
            	<Icon name="check" color={Colors.white} size={30} type='octicon' containerStyle={Utils.chapterCompleted(completed, item.id) ? styles.cSlideCompletedIcon : styles.displayN}/>
            	<View style={{...styles.cCircleContainer, backgroundColor: item.bgColor, borderColor: item.bgColor, shadowColor: item.bgColor}}>
            	<Text style={styles.cCircleNo}>{(index + 1)}</Text></View>
            </TouchableOpacity>
            <Text style={styles.cSlideSubTitle}>{item.desc}</Text>
            <Text style={styles.cSlideChatLine}>{item.details}</Text>
            <Button onPress={() => _navigate(item)} icon={<Icon name={Utils.unlockChapter(index, completed, item.id) ? (Utils.chapterCompleted(completed, item.id) ? 'check' : 'play') : 'lock'} size={18} color={Utils.unlockChapter(index, completed, item.id)  ? (Utils.chapterCompleted(completed, item.id) || !item.active ? Colors.white : Colors.grayDarkest) : Colors.white} type='font-awesome'/>}
  				title={!item.active || !Utils.unlockChapter(index, completed, item.id) ? 'Locked' : (Utils.chapterCompleted(completed, item.id) ? "Complete" : "Start")} 
  				buttonStyle={[styles.cSlideBtn, Utils.unlockChapter(index, completed, item.id)  ? (Utils.chapterCompleted(completed, item.id) ? styles.cSlideCompletedBtn : styles.cSlideBtnActive) : '']} 
  				containerStyle={styles.cSlideBtnContainer}
  				titleStyle={[styles.cSlideBtnLabel, Utils.unlockChapter(index, completed, item.id)  ? (Utils.chapterCompleted(completed, item.id) ? styles.cSlideBtnLabel : styles.cSlideBtnLabelLight) : '']}
  				disabled={!Utils.unlockChapter(index, completed, item.id) || !item.active}
  				disabledStyle={styles.cSlideBtn}
  				disabledTitleStyle={styles.cSlideBtnLabel}/>
  				<Icon containerStyle={[styles.disableOverlayLabel, !item.active ? '' : styles.displayN]} name={'lock'} size={RFValue(50)} color={Colors.white} type='font-awesome'/>
          </View>
        );
    }

	// RENDER HTML
	return (
		<View style={styles.appbg}>
			<Loader show={screenIsWaiting} />
			<SafeAreaView style={styles.safeViewContainer}>
			<MHeader title="All Chapters" icon="book"/>
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
				data={state}
				renderNextButton={_renderNextButton}
				renderPrevButton={_renderPrevButton}/>
			</View>
	        	<Menu navigation={navigation} activeMenu={'CHAPTER'}></Menu>

			<View style={[styles.body, styles.pt10, listView ? '' : styles.displayN, styles.pb50]}>
		    	<FlatList data={state}
		        	refreshControl={
			          <RefreshControl 
			          refreshing={isFetching} 
			          onRefresh={getAllData} />
			        }
	    			extraData={state}
		        	showsHorizontalScrollIndicator={true}
		        	renderItem = { ({item, index}) => (
		        	<>
		        		<TouchableOpacity onPress={() => _navigate(item)}  underlayColor="transparent" disabled={!Utils.unlockChapter(index, completed, item.id)}>
				        	<View style={[styles.dLType1]} key={'CHAPTER_' + index}>
					    		<View style={styles.dLType1LeftContainer}>
					    			<View style={Utils.unlockChapter(index, completed, item.id) ? styles.dLType1LeftIconContainerActive : styles.dLType1LeftIconContainer}>
					    				<Icon name="check" color={Colors.white} size={17} type='octicon' containerStyle={Utils.chapterCompleted(completed, item.id) ? styles.dLType1CompletedBtnContainer : styles.displayN}/>
					    				<Image source={WinnerIcon} style={styles.dLType1LeftIcon}/>
					    			</View>
					    		</View>
					    		<View style={styles.dLType1Content}>
									<Text style={styles.dLType1Title}>{item.title}</Text>
					    			<Text style={styles.dLType1Desc} numberOfLines={1}>{item.desc}</Text>
					    		</View>
					    		<View style={styles.dLType1RightContainer}>
					    			<Button onPress={() => _navigate(item)} icon={<Icon name={Utils.unlockChapter(index, completed, item.id) ? (Utils.chapterCompleted(completed, item.id) ? 'check' : 'play') : 'lock'} size={18} color={Utils.unlockChapter(index, completed, item.id)  ? (Utils.chapterCompleted(completed, item.id) ? Colors.white : Colors.grayDarkest) : Colors.white} type='font-awesome'/>}
  									title={Utils.unlockChapter(index, completed, item.id) ? (Utils.chapterCompleted(completed, item.id) ? "Done" : "Start") : 'Locked'} 
  									buttonStyle={[styles.dLType1RightBtn, Utils.unlockChapter(index, completed, item.id)  ? (Utils.chapterCompleted(completed, item.id) ? styles.cSlideCompletedBtn : styles.cSlideBtnActive) : '']} 
  									containerStyle={styles.dLType1RightBtnContainer}
  									titleStyle={[styles.dLType1RightBtnLabel, Utils.unlockChapter(index, completed, item.id)  ? (Utils.chapterCompleted(completed, item.id) ? styles.dLType1RightBtnLabel : styles.cSlideBtnLabelLight) : '']}
  									iconRight= {Utils.unlockChapter(index, completed, item.id)  ? false : true }
  									disabled={!Utils.unlockChapter(index, completed, item.id)}
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
		        keyExtractor = {(item, index) => 'chapterId_' + item.id.toString() + '_chapterIndex_' + index.toString()}/>
	        </View>
			</SafeAreaView>
	    </View>
  	);
}
