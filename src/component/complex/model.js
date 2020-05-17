
/**
*
* model.js
* Basic model popup
*
* @author - Faizal
* @date   - 6 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {Text, View, TouchableHighlight, Modal, Image, FlatList} from 'react-native';
import { Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { Html5Entities } from 'html-entities'; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ICONS
import MedalIcon from '../../../assets/img/medal.png';
import WinnerIcon from '../../../assets/img/winner.png';
import StarIcon from '../../../assets/img/star.png';

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Data from '../../shared/data';

export const ModelPopup = (props) => {
  
  // DECLARE STATE VARIABLE
  const [show, setShow] = useState(true);

  // LOCAL OBJECT DECLARE
  const entities = new Html5Entities();
  
  // COMPONENT OPTIONS
  const {
        animationType = "slide",
        transparent = true,
        //show = false,
        //isShowModel,
        content
  } = props

  // WHEN EVER SHOW PROPS CHANGES
  useEffect(() => {
    console.log('Show / hide the model');
  }, [props.show]);

  // LOCAL STATE DECLARATION transparent={true}
  const[modalVisible, setModalVisible] = useState(true);

  // RENDER HTML
  return (
    <>
      <Modal animationType="slide" transparent={false} visible={show} presentationStyle={'fullScreen'}>
        <View style={[styles.modelCenteredView]}>
          <Icon name="x" color={Colors.grayDarkest} containerStyle={styles.modelClose} size={40} type='octicon' onPress={() => setShow(false)} />
           <View style={[styles.modalView]}>
            <View  style={styles.modelTitleContainer}>
              <Text style={styles.modelTitle}>Welcome to Alif Ba Ta</Text>
            </View>
            <View style={[styles.modellBody]}>
              <Text style={[styles.modellText, styles.tCenter]}>Before start learning, would like to share about below rewards qwhen you complete a chapter, lesson, answer a quiz or complete a games.</Text>
                <View style={[styles.rowDirection, styles.mt20, styles.modelTable]}>
                  <View style={[styles.w50, styles.centerView]}><Image source={WinnerIcon} style={{width: RFValue(30), height: RFValue(30)}}/></View>
                  <View style={[styles.flex1, styles.pl5]}><Text style={styles.modellSubText}>On Completing each chapter, you will get one <Text style={styles.darkHigh}>Trophy</Text> and a special <Text style={styles.darkHigh}>Badge</Text></Text></View>
                </View>
                <View style={[styles.rowDirection, styles.modelTable]}>
                  <View style={[styles.w50, styles.centerView]}><Image source={MedalIcon} style={{width: RFValue(30), height: RFValue(30)}}/></View>
                  <View style={[styles.flex1, styles.pl5]}><Text style={styles.modellSubText}>On Completing each lesson, you will get one <Text style={styles.darkHigh}>Medal.</Text></Text></View>
                </View>
                <View style={[styles.rowDirection, styles.modelTable]}>
                  <View style={[styles.w50, styles.centerView]}><Image source={StarIcon} style={{width: RFValue(30), height: RFValue(30)}}/></View>
                  <View style={[styles.flex1, styles.pl5]}><Text style={styles.modellSubText}>For every correct answer, you will get one <Text style={styles.darkHigh}>Star.</Text></Text></View>
                </View>
            </View>
            <TouchableHighlight onPress={() => setShow(false)} style={[styles.btn, styles.primaryBtn]}>
              <Text style={styles.lightBtnText}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </>
    );
} 
