/**
*
* steps.js
* Steps details.
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useState, useEffect, useContext} from 'react';
import { RefreshControl, StyleSheet, Text, View , FlatList, TouchableHighlight, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Html5Entities } from 'html-entities'; 

// ALL PAGE FILES
import { MHeader  } from '../layout/header';

// ALL COMPONENT
import { Loader  } from '../../component/complex/loader';
import { Empty  } from '../../component/complex/empty';
import { Menu  } from '../../component/complex/menu';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Setting  } from '../../shared/setting';
import { Colors } from '../../shared/colors';
import * as Constant from '../../shared/constant';
import * as Utils from '../../shared/utils';
import * as Data from '../../shared/data';
import * as Storage from '../../shared/storage';

export const StepsScreen = ({ navigation, route }) => {

    // DECLARE STATE VARIABLE
  const [isFetching, setIsFetching]           = useState(false);
  const [screenIsWaiting, setScreenIsWaiting] = useState(true);
  const [state, setState]                     = useState(route.params?.stepsData ? route.params.stepsData : []);
  const [listView, setListView]               = useState(false);

  // LOCAL VARIABLE DECLARE
  const entities = new Html5Entities();

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
  * LEFT ARROW CUSTOMISE BUTTON
  *
  * @input  NA
  * @return NA
  */
  const _slideMove = (nextIndex) => {
    this.AppIntroSlider.goToSlide(nextIndex);
  }
    

  /**
  * Feature used to generate each slide
  *
  * @input  Object - Slider object
  * @return Tags
  */
  const generateItem = ({ item, index }) => {
    return (
      <ScrollView underlayColor="transparent" contentContainerStyle={[Utils.isAndroid() ? styles.cSlideAndroid : styles.cSlide,  item.topStyle, styles.centerView]} key={'QUIZ_TYPE3_' + index} 
        contentContainerStyle={{...item.topStyle, flexGrow: 1, alignItems: "center",   justifyContent: "center"}}>
        <View style={[item.titleType === Constant.GENERIC.TEXT ? '' : styles.displayN, {marginBottom: 30}]}>
          <Text style={[styles.progressBarTitle]}>{item.title}</Text>
        </View>
        <View style={[item.titleType === Constant.GENERIC.NUMBER ? styles.stepNoContainer : styles.displayN, {marginBottom: 30, alignSelf: 'center'}]}>
          <Text style={[styles.progressBarTitle, , styles.stepNo]}>{item.title}</Text>
        </View>
        <View style={[styles.centerView]}>
          <Image source={item.img} style={[styles.img120, item.img ? '' : styles.displayN, item.imgStyle ? item.imgStyle : '']} resizeMode={'contain'}/>
        </View>
        <TouchableOpacity style={[styles.cCircleContainerOuter, {borderColor: item.bgColor}, (item.imgText && item.imgType === Constant.GENERIC.NUMBER) ? '' : styles.displayOpaN]} underlayColor="transparent">
          <View style={[styles.cCircleContainer, {backgroundColor: item.bgColor, borderColor: item.bgColor, shadowColor: item.bgColor}]}>
            <Text style={[styles.cCircleNo, styles.imgNo]}>{item.imgText}</Text>
          </View>
        </TouchableOpacity>
        <Text style={[styles.imgText, (item.imgText && item.imgType === Constant.GENERIC.TEXT) ? '' : styles.displayN]}>{item.imgText}</Text>
        <Text style={[styles.cSlideSubTitle, styles.mt20, item.desc ? '' : styles.displayN]}>{item.desc}</Text>
        <Text style={[styles.cSlideChatLine, styles.mt20, item.details ? '' : styles.displayN]}>{item.details}</Text>
        <View style={[styles.cSlideChatMinLineContainer, item.moreDetails ? '' : styles.displayN]}>
          <Text style={[styles.cSlideChatMinLine, styles.whiteText]}>{entities.decode('&#8220;')}{item.moreDetails}{entities.decode('&#8221;')}</Text>
        </View>
        <View style={[styles.cslideBottomHeight]}></View>
      </ScrollView>
    );
  }

  // RENDER HTML
  return (
    <>
        <Loader show={screenIsWaiting} />
        <SafeAreaView style={[styles.safeViewContainer]}>
        <MHeader title={state.title} hideShareIconIOS={true}/>
        <View style={[styles.body, styles.p0, styles.pb15]}>
          <AppIntroSlider
            scrollEnabled={true}
            dotClickEnabled={false}
            activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}} 
            dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
            showDoneButton={false} 
            showSkipButton={false} 
            showPrevButton={true}
            showNextButton={true} 
            renderItem={generateItem} 
            data={state.data}
            renderNextButton={Utils.renderNextButton}
            renderPrevButton={Utils.renderPrevButton}/>
        </View>
        <Menu navigation={navigation} activeMenu={'STEPS'}></Menu>
        </SafeAreaView>
      </>
    );
}
