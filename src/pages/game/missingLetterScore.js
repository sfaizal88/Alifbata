/**
*
* missingLetterScore.js
* Missing letter score.
*
* @author - Faizal
* @date   - 26 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View , SafeAreaView, Image, StatusBar, FlatList, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL PAGE FILES
import { MHeader  } from '../layout/header';

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';
import { Menu  } from '../../component/complex/menu';


// ALL ICON
import MobileIcon from '../../../assets/img/headsup.png';
import StarIcon from '../../../assets/img/star.png';

// DATA
import * as Game from '../../data/game/game';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Setting  } from '../../shared/setting';
import { Colors } from '../../shared/colors';
import * as Constant from '../../shared/constant';
import * as Utils from '../../shared/utils';
import * as Data from '../../shared/data';

export const MissingLetterScoreScreen = ({ navigation, route }) => {

    // DECLARE STATE VARIABLE
	const [isFetching, setIsFetching]           = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(false);
	const [state, setState]                     = useState(route.params.answerList);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// HIDE LOADER 
		setScreenIsWaiting(false);
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// UPDATE STATUS COLOR
			StatusBar.setBarStyle('light-content');
			// HIDE LOADER 
			setScreenIsWaiting(false);
		});
     	// PLAY THE AUDIO
      	Utils.playAudio(Constant.GENERIC.SCORE_AUDIO);
	}, []);


	
	/**
    * Navigate between screen
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _navigate = (path, data = {}) => {
		// NAVIGATING TO LESSON SCREEN WITH SINGLE CHAPTER OBJECT
		navigation.navigate(path, data)
	}

  // RENDER HTML
  return (
    <View style={styles.appbg}>
        <SafeAreaView style={[styles.safeViewContainer]}>
        	<MHeader title={'Spy Word'}/>
        	<ScrollView style={[styles.body, styles.p0, styles.pb15, styles.pt20]} contentContainerStyle={[styles.centerView, styles.column]}>
	        	<View>
	        	<Text style={[styles.slideTitleNoTop, styles.slideTitleQuestion]}>{'Score Board'}</Text>
		        <View style={styles.slideType3ImageContainer}>
		          <Image source={StarIcon} style={styles.slideType3Image}/>
		        </View>
        		<Text style={styles.slideType3Title}>Masha Allah</Text>
        		<Text style={[state.length ? styles.displayN : '', styles.slideType3Desc, Utils.isIpad() ? styles.descM : '', Utils.isIpad() ? styles.mb0: styles.mb0]}>{"Sorry. You did't answered anything."}</Text>
		        <FlatList data={state}
			        	style={[{flexGrow: 0}, styles.mh20, state.length ? '' : styles.displayN]}
	                    showsHorizontalScrollIndicator={false}
	                    numColumns={2}
	                    renderItem = { ({item, index}) =>  (
	                      	<View style={[styles.answerContainer,  item.type === Constant.GENERIC.CORRECT_ANSWER ? {backgroundColor: Colors.green} : {backgroundColor: Colors.red}]} key={index}>
								<Text style={[styles.answerLabel]}>{item.word}</Text>
		    				</View>
	                    )}
	                keyExtractor = {(item, index) => ('answerIndex_' + index).toString()}/>
				<View style={[styles.slideImageContainer, styles.rowDirection]}>
					<Button onPress={() => _navigate('GameList', {params: { slideIndex: 0 }})} icon={<Icon name={'refresh'} size={RFValue(18)} color={Colors.grayDarkest} type='font-awesome'/>}
					  title={"Replay"} buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive, styles.ph20]} 
					  containerStyle={[styles.cSlideBtnContainer, styles.ph10, Utils.isIpad() ? styles.mt0 : '']}
					  titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}/>
					  <Button onPress={() => _navigate('GameList')} icon={<Icon name={'chevron-right'} size={RFValue(18)} color={Colors.grayDarkest} type='font-awesome'/>}
					  title={"All Games"} buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive, styles.ph20]} 
					  containerStyle={[styles.cSlideBtnContainer, styles.ph10, Utils.isIpad() ? styles.mt0 : '']} iconRight={true}
					  titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}/>
				</View>
				<View style={{height: 40}}></View>
				</View>
		    </ScrollView>
        </SafeAreaView>
        <Menu navigation={navigation} activeMenu={'GAME'}></Menu>
      </View>
    );
}