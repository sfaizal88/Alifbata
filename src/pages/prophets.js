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
import { RefreshControl, StyleSheet, Text, View , FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

// ALL PAGE FILES
import { MHeader  } from './layout/header';

// ALL CONTEXT FILES
import AppContext from '../context/appContext';

// ALL COMPONENT
import { Loader  } from '../component/complex/loader';
import { Empty  } from '../component/complex/empty';

// DATA
import * as Chapters from '../data/chapters';

// ALL SHARED FILES
import { styles  } from '../shared/stylesheet';
import { Colors } from '../shared/colors';
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Data from '../shared/data';

export const ProphetsScreen = ({ navigation }) => {

  	// DECLARE STATE VARIABLE
	const [isFetching, setIsFetching] = useState(false);
	const [screenIsWaiting, setScreenIsWaiting] = useState(true);
	const [state, setState] = useState(Chapters.allChapter);

	// DECLARE CONTEXT
	const appContextPayLoad = useContext(AppContext);

	// USE EFFECT ON LOAD PROCESS
	useEffect(() => {
		// WHEN USER PRESS TAB, TRIGGER WILL OCCUR
		navigation.addListener('focus', () => {
			// UPDATING THE PAGE TITLE
			navigation.setOptions({ title: 'Prophets' });
			// PULL ALL CHAPTER DATAS
			getAllData();
			// HIDE LOADER 
		  	setScreenIsWaiting(false);
		});
		// HIDE LOADER 
		setScreenIsWaiting(false);
	}, []);
	
	/**
    * Navigate between screen
    *
    * @input  Object - Single chapter details object
    * @return NA
    */
	const _navigate = (data) => {
		// NAVIGATING TO LESSON SCREEN WITH SINGAPORE CHAPTER OBJECT
		navigation.navigate('Lesson', {data: data})
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

	// RENDER HTML
	return (
		<>
        	<Loader show={screenIsWaiting} />
        	<SafeAreaView style={styles.safeViewContainer} forceInset={Data.SafeAreaViewSetting}>
	    	<MHeader title="Customer" icon="group"/>
	    	<View style={[styles.body]}>
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
		        		<TouchableHighlight onPress={() => _navigate(item.data)}  underlayColor="transparent">
				        	<View style={[styles.listType1Container]} key={'CHAPTER_' + index}>
					    		<View style={styles.listType1LeftContainer}>
					    			<Icon name="bullseye" color={Colors.grayDarkest} size={30} type='font-awesome'/>
					    		</View>
					    		<View style={styles.listType1Content}>
									<Text style={styles.listType1Title}>{item.title}</Text>
					    			<Text style={styles.listType1Descr} numberOfLines={1}>{item.desc}</Text>
					    		</View>
					    		<View style={styles.listType1RightContainer}>
					    			<Icon name="check" color={Colors.fBorderColor} size={25} type='octicon'/>
					    		</View>
					    	</View>
				    	</TouchableHighlight>
				    </>
		        	)}
		        	ListEmptyComponent = {() => (
		        		<Empty icon={'group'} title='No Chapter Found' subtitle='Try again later.'/>
		        	)}
		        keyExtractor = {(item, index) => 'chapterIndex_' + index.toString()}/>
	        </View>
	  		</SafeAreaView>
	  	</>
  	);
}