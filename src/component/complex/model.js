
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
import {Text, View, TouchableHighlight, Modal, Icon} from 'react-native';
import { WebView } from 'react-native-webview';
import { Html5Entities } from 'html-entities'; 

// ALL SHARED FILES
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';

export const ModelPopup = (props) => {
  
  // LOCAL OBJECT DECLARE
  const entities = new Html5Entities();
  
  // COMPONENT OPTIONS
  const {
        animationType = "slide",
        transparent = true,
        show = false,
        isShowModel,
        content
  } = props

  // WHEN EVER SHOW PROPS CHANGES
  useEffect(() => {
    console.log('Show / hide the model');
  }, [props.show]);

  // LOCAL STATE DECLARATION
  const[modalVisible, setModalVisible] = useState(true);

  // RENDER HTML
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View style={styles.modelCenteredView}>
          <View style={styles.modalView}>
            <View  style={styles.modelTitleContainer}><Text style={styles.modelTitle}>Arabic Short Vowel Fathatain</Text></View>
            <View style={styles.rowDirection}>
              <View style={styles.flex1}></View>
              <View style={{...styles.modelsBox, height: 30}}>
                <Text style={[styles.modelmTitle, styles.modellTitle]}>{entities.decode('&#1614;')}</Text>
                <Text style={styles.modelLabel}>(a)</Text>
              </View>
              <View style={[styles.modelsBox, styles.centerView]}>
                <Text style={styles.modelmTitle}><Icon name="plus" type="font-awesome" underlayColor="transparent"/></Text>
              </View>
              <View style={styles.modelsBox}>
                <Text style={[styles.modelmTitle, styles.modellTitle]}>{entities.decode('&#1614;')}</Text>
                <Text style={styles.modelLabel}>(a)</Text>
              </View>
              <View style={[styles.modelsBox, styles.centerView]}>
                <Text style={styles.modelmTitle}>{entities.decode('&equals;')}</Text>
              </View>
              <View style={styles.modelsBox}>
                <Text style={[styles.modelmTitle, styles.modellTitle]}>{entities.decode('&#1611;')}</Text>
                <Text style={styles.modelLabel}>(N)</Text>
              </View>
              <View style={styles.flex1}></View>
            </View>
            <TouchableHighlight onPress={() => isShowModel(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
        </>
    );
} 
