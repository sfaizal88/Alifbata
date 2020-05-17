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
import React, {useState, useEffect, useContext} from 'react';
import { RefreshControl, StyleSheet, Text, View , FlatList, TouchableHighlight, Image, Dimensions, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppIntroSlider from 'react-native-app-intro-slider';

// ALL PAGE FILES
import { MHeader  } from './layout/header';

// DATA
import * as Steps from '../data/steps/steps';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { Empty  } from '../component/complex/empty';
import { Menu  } from '../component/complex/menu';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import { Setting } from '../shared/setting';
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Data from '../shared/data';
import * as Storage from '../shared/storage';

export const StepsScreen = ({ navigation }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState]                     = useState(Steps.data);
  	const [listView, setListView]               = useState(false);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// UPDATE STATUS COLOR
      		StatusBar.setBarStyle('light-content');
			// HIDE LOADER 
		  	setScreenIsWaiting(false);
		});
		// HIDE LOADER 
		setScreenIsWaiting(false);
	}, []);

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
    * Navigate between screen
    *
    * @input  Object - Single quiz details object
    * @return NA
    */
	const _navigate = (data) => {
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
        return (
          <View  underlayColor="transparent" style={styles.cSlide} key={'LIST_TYPE3_' + index}>
          	<View style={[styles.chapterLesOverlay]}></View>
          	<View style={[styles.disableOverlay, !item.active ? '' : styles.displayN]}></View>
          	<Text style={[styles.progressBarTitle]}>{item.title}</Text>
            <TouchableOpacity style={{...styles.cCircleContainerOuter, borderColor: item.bgColor}} onPress={() => _navigate(item)} underlayColor="transparent">
            	<View style={{...styles.cCircleContainer, backgroundColor: item.bgColor, borderColor: item.bgColor, shadowColor: item.bgColor}}>
            		<Image source={item.img} style={{width: RFValue(80), height: RFValue(80)}}/>
            	</View>
            </TouchableOpacity>
            <Text style={[styles.cSlideSubTitle, styles.cSlideMSubTitle, styles.mt20]}>{item.desc}</Text>
            <Text style={[styles.cSlideChatLine, styles.mt20]}>{item.details}</Text>
            <Button onPress={() => _navigate(item)} 
            	icon={<Icon name={'play'} size={18} color={Colors.white} type='font-awesome'/>}
  				title={"Coming Soon"} 
  				buttonStyle={[styles.cSlideBtn]} 
  				containerStyle={styles.cSlideBtnContainer}
  				titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabel]}/>
  			<Text style={[styles.disableOverlayLabel, !item.active ? '' : styles.displayN]}>LOCKED</Text>
          </View>
        );
    }

	// RENDER HTML
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer}>
	    	<MHeader title="Islamic Knowledge" icon="dashboard"/>
	    	<Icon name="bullseye" color={Colors.white} size={40} type='font-awesome' onPress={() => setListView(!listView)} containerStyle={{position: 'absolute', right: '5%', top: '5%', display: 'none'}} underlayColor="transparent" />
	    	
	    	<View style={[styles.body, styles.p0, styles.pb15, listView ? styles.displayN : '']}>
				<AppIntroSlider
				dotClickEnabled={false}
				activeDotStyle={{backgroundColor: Colors.primary}} 
				dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
				showDoneButton={false} 
				showSkipButton={false} 
				showPrevButton={true}
				showNextButton={true} 
				renderItem={generateItem} 
				data={state}
				renderNextButton={_renderNextButton}
				renderPrevButton={_renderPrevButton}/>
			</View>
	  		</SafeAreaView>
	  		<Menu navigation={navigation} activeMenu={'STEPS'}></Menu>
	  	</>
  	);
}