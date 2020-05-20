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
import { RefreshControl, StyleSheet, Text, View , FlatList, TouchableHighlight, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';

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
          <View  underlayColor="transparent" style={styles.cSlide} key={'QUIZ_TYPE3_' + index}>
            <Text style={{...styles.progressBarTitle, top: -50}}>{item.title}</Text>
            <Image source={item.img} style={styles.img120}/>
            <Text style={[styles.cSlideSubTitle, styles.cSlideMSubTitle, styles.mt20]}>{item.desc}</Text>
            <Text style={[styles.cSlideChatLine, styles.mt20]}>{item.details}</Text>
            <Button onPress={() => _slideMove(index + 1)} 
              icon={<Icon name={'angle-right'} size={25} color={Colors.grayDarkest} type='font-awesome'/>}
              title={ "Next" } 
              buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive]} 
              containerStyle={styles.cSlideBtnContainer}
              titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}
              iconRight={true}/>
          </View>
        );
  }

  // RENDER HTML
  return (
    <>
        <Loader show={screenIsWaiting} />
        <SafeAreaView style={styles.safeViewContainer}>
        <MHeader title={state.title} subtitle={state.desc}/>
        <Icon name="bullseye" color={Colors.white} size={40} type='font-awesome' onPress={() => setListView(!listView)} containerStyle={{position: 'absolute', right: '5%', top: '5%', display: 'none'}} underlayColor="transparent" />
        <View style={[styles.body, styles.p0, listView ? styles.displayN : '']}>
          <AppIntroSlider
            ref={ref => this.AppIntroSlider = ref}
            dotClickEnabled={false}
            activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}} 
            dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
            showDoneButton={false} 
            showSkipButton={false} 
            showPrevButton={true}
            showNextButton={true} 
            renderItem={generateItem} 
            data={state.data}
            renderNextButton={_renderNextButton}
            renderPrevButton={_renderPrevButton}/>
        </View>
          <Menu navigation={navigation} activeMenu={'STEPS'}></Menu>
        </SafeAreaView>
      </>
    );
}
