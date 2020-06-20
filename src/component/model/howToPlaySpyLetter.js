
/**
*
* howToPlaySpyLetter.js
* Basic model popup
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {Text, View, TouchableHighlight, Modal, Image, FlatList, TextInput, KeyboardAvoidingView} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppIntroSlider from 'react-native-app-intro-slider';

// ICONS
import MedalIcon from '../../../assets/img/medal.png';
import WinnerIcon from '../../../assets/img/winner.png';
import StarIcon from '../../../assets/img/star.png';

// ALL SHARED FILES
import { Loader  } from '../complex/loader';
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Data from '../../shared/data';
import * as Constant from '../../shared/constant';
import * as Storage from '../../shared/storage';
import * as Utils from '../../shared/utils';
import * as API from '../../service/api';

export const HowToPlaySpyLetter = (props) => {

  // DECLARE STATE VARIABLE
  const [state, setState] = useState(Data.howToPlaySpyLetter);

  // USE EFFECT ON LOAD PROCESS
  useEffect(() => {
    // PULL DATA
    setState(Data.howToPlaySpyLetter);
  }, []);

  /**
  * Feature use to check completed lesson
  *
  * @input  NA
  * @return NA
  */
  const close = () => {
    // CLOSE POPUP
    props.handleClose();
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
          <View underlayColor="transparent" style={styles.cSlide} key={'QUIZ_TYPE3_' + index}>
            <Image source={item.img} style={[styles.img120]} resizeMode={'contain'}/>
            <Text style={[styles.cSlideSubTitle, styles.mt20]}>{item.title}</Text>
            <Text style={[styles.cSlideChatLine, styles.mt20]}>{item.desc}</Text>
          </View>
        );
    }

  // RENDER HTML
  return (
    <>
      <Modal animationType="slide" transparent={false} visible={props.show}>
        <View style={[styles.modelCenteredView]}>
          <Icon name="x" color={Colors.grayDarkest} containerStyle={[styles.modelClose, {zIndex: 2}]} size={40} type='octicon' onPress={() => close()} />
           <View style={[styles.modalView]}>

              <View style={[styles.modellBody]}>
                <View  style={styles.modelTitleContainer}>
                  <Text style={styles.modelTitle}>{'HOW TO PLAY\nSPY WORD'}</Text>
                </View>
                <AppIntroSlider
                  dotClickEnabled={true}
                  activeDotStyle={{backgroundColor:  Colors.primary}} 
                  dotStyle={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
                  showDoneButton={false} 
                  showSkipButton={false} 
                  showPrevButton={true}
                  showNextButton={true} 
                  renderItem={generateItem} 
                  data={state}
                  renderNextButton={Utils.renderNextButton}
                  renderPrevButton={Utils.renderPrevButton}/>
                </View>
          </View>
        </View>
      </Modal>
    </>
    );
} 

/*
<Button onPress={() => _slideMove(index + 1)} 
  icon={<Icon name={'angle-right'} size={RFValue(18)} color={Colors.grayDarkest} type='font-awesome'/>}
  title={ "Next" } 
  buttonStyle={[styles.cSlideBtn, styles.cSlideBtnActive]} 
  containerStyle={styles.cSlideBtnContainer}
  titleStyle={[styles.cSlideBtnLabel, styles.cSlideBtnLabelLight]}
  iconRight={true}/>
*/
